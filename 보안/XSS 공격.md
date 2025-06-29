### XSS 공격

- Crost-Site Scripting 공격 방어

---

1. DangerouslySetInnerHTML 사용 주의

- DOMPurify로 살균

2. Content Security Policy (CSP) 설정

- client:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'">
```

- server:

```javascript
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' https://cdn.example.com;");
  next();
});
```
