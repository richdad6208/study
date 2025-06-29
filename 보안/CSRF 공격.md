### CSRF 공격

`CSRF 공격은 사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위를 특정 웹사이트에 요청하게 하는 공격입니다.
`

1. CSRF 토큰 사용: 서버에서 생성한 CSRF 토큰을 모든 요처에 포함시켜 요청의 정당성을 검증합니다.

- CSRF 토큰검증

```
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
```

- SameSite 쿠키 속성허용
- Referer 검사
- 의존성 패키지 관리

```
npm audit
npm audit fix
```
