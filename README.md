# Report API Application

[![CircleCI](https://circleci.com/gh/toei-jp/report-api.svg?style=svg)](https://circleci.com/gh/toei-jp/report-api)

## Table of contents

* [Usage](#usage)
* [License](#license)

## Usage

### Environment variables

| Name                            | Required | Value        | Purpose                                  |
| ------------------------------- | -------- | ------------ | ---------------------------------------- |
| `DEBUG`                         | false    | report-api:* | Debug                                    |
| `NODE_ENV`                      | false    |              | Environment name                         |
| `SQLSERVER_DATABASE`            | true     |              | MS SQL Server database name            |
| `SQLSERVER_USERNAME`            | true     |              | MS SQL Server access username        |
| `SQLSERVER_PASSWORD`            | true     |              | MS SQL Server access password        |
| `SQLSERVER_HOST`                | true     |              | MS SQL Server host address         |
| `RESOURCE_SERVER_IDENTIFIER`    | true     |              | Resource server identifier      |
| `TOKEN_ISSUERS`                 | true     |              | Tokken issuers                           |

## License

ISC
