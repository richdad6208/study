```javascript
const getUserRecipes = (userId: string | undefined) => async () => {
  const { data } = await axios.get(`${URL}/${userId}/recipes`);

  return data;
};

const useUserRecipes = (userId: string | undefined) => {
  return useQuery({
    queryKey: [...userRecipesKey, userId],
    queryFn: getUserRecipes(userId), // (userId)=> getUserRecipes(userId) 이렇게 안해도 된다.
    enabeld: !!userId,
  });
};
```
