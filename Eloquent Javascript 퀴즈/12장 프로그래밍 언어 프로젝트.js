function parseApply(expr, program) {
  program = skipSpace(program);
  if (program[0] != "(") {
    return { expr: expr, rest: program };
  }

  program = skipSpace(program.slice(1));
  expr = { type: "apply", operator: expr, args: [] };
  while (program[0] != ")") {
    let arg = parseExpression(program);
    expr.args.push(arg.expr);
    program = skipSpace(arg.rest);
    if (program[0] == ",") {
      program = skipSpace(program.slice(1));
    } else if (program[0] != ")") {
      throw new SyntaxError("Expected ',' or ')'");
    }
  }
  return parseApply(expr, program.slice(1));
}

function parse(program) {
  let { expr, rest } = parseExpression(program);
  if (skipSpace(rest).length > 0) {
    throw new SyntaxError("Unexpected text after program");
  }
  return expr;
}

const specialForms = Object.create(null);

function evaluate(expr, scope) {
  if (expr.type == "value") {
    return expr.value;
  } else if (expr.type == "word") {
    if (expr.name in scope) {
      return scope[expr.name];
    } else {
      throw new ReferenceError(`Undefined binding: ${expr.name}`);
    }
  } else if (expr.type == "apply") {
    let { operator, args } = expr;
    if (operator.type == "word" && operator.name in specialForms) {
      return specialForms[operator.name](expr.args, scope);
    } else {
      let op = evaluate(operator, scope);
      if (typeof op == "function") {
        return op(...args.map((arg) => evaluate(arg, scope)));
      } else {
        throw new TypeError("Applying a non-function");
      }
    }
  }
}

specialForms.if = (args, scope) => {
  if (args.length != 3) {
    throw new SyntaxError("Wrong number of args to if");
  } else if (evaluate(args[0], scope) !== false) {
    return evaluate(args[1], scope);
  } else {
    return evaluate(args[2], scope);
  }
};

specialForms.while = (args, scope) {
  if (args.length != 2) {
    throw new SyntaxError("Wrong number of args to while"); 
  }
  while (evaluate(args[0], scope) !== false) {
    evaluate(args[1], scope); 
  }
  
  return false; 
}

specialForms.do = (args, scope) => {
  let value = false; 
  for (let arg of args) {
    value = evaluate(arg, scope); 
  }
  return value; 
}

specialForms.define = (args, scope) => {
  if (args.length != 2 || args[0].type != "word"){
    throw new SyntaxError("Incorrect use of define"); 
  }
  let value = evaluate(args[1], scope); 
  scope[args[0].name] = value; 
  return value; 
}

const topScope = Object.create(null); 

topScope.true = true; 
topScope.false = false; 