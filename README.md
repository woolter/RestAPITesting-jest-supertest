# Rest API testing using Jest and Supertest

This is a POC using Jest and Supertest for API testing and Allure as reporting.

## Quick start

Run the dummy server

```sh
$ docker run -p 80:80 kennethreitz/httpbin
```

In another shell, run tests and reporting

```sh
$ git clone ...
$ cd ...
$ yarn install
$ # run tests
$ yarn test
$ # generate report
$ yarn allureReport
```

## Dependencies

- Node v8.11.3
- Docker version 18.03.1
- [Allure v2.7.0](https://github.com/allure-framework/allure2)

## Notes

I extended Jest `expect` with `.toMatchSchema()`. See [jest-json-schema](https://github.com/americanexpress/jest-json-schema).
