# Features

- It should be able to register a service;
- It should be able to register an event;

## Details

- Each service can publish multiple events;
- Each service can subscribe to multiple events;

- Each event have: 
  - A optional markdown description;
  - A JSON schema;

## Rules

- Events must always be backward compatible;

## Cool things

- We could generate TypeScript typings based on JSON Schema;
- We could generate Zod schema based on JSON Schema and vice versa;
- We could automatically publish NPM packages for each service and event version:
  - @flowly/{org}-{service}
- We could check for unused published data for each event based on subscribers;
