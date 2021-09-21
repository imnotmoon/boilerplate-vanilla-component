## 내가 쓰려고 만든 boiler plate

<br/>

### TODO

-   [x] `package.json` 작성
-   [x] webpack 설정
    -   [x] css, scss 지원
    -   [x] webpack-dev-server
    -   [x] index.html 기준 번들링 (SPA)
    -   [x] babel : IE excluded
-   [ ] 프로젝트 구조 설계 (극한의 추상화)
    -   [ ] vdom을 따라할수는 없지만.. 유사 React 지향
-   [x] 인터페이스 설계 (적절한 결합도)
-   [x] greeting code(example code) 작성
-   [ ] 자주쓸거같은 util 작성 -> 모듈화
        <br/>

### 구성요소

-   npm scripts
    -   build
    -   run
-   webpack
    -   loader
        -   css-loader
        -   style-loader
        -   scss-loader
        -   file-loader
    -   plugins
        -   webpack-dev-server
        -   babel (to: es5)
-   SPA 기본 세팅
    -   유사 React 지향
    -   MV\*
