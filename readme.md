# parse-sip-uri

This package parses a SIP URI. Ex. sip:+12345678900@somedomain.com;transport=tcp

## Description

In some projects, it's necessary to derive information from a SIP URI. While it's easy enough to do this within the code, I wanted a package to use instead of continually rewritting the same lines.

The function returns an object with the parsed data.

## Getting Started

### Dependencies

No dependencies

### Installing

npm i parse-sip-uri

### Executing program

```const parseSipUri = require('parse-sip-uri').parseSipUri;

const obj = parseSipUri("sip:1234512345@domain.com");

console.log(obj);

{
  Protocol: 'sip',
  User: '1234512345',
  Domain: 'domain.com',
  TransportProtocol: 'udp',
  E164Number: '+11234512345',
  encodedURIComponentNumber: '%2B11234512345'
}

```

## Help


## Authors

Contributors names and contact info

Michael Herman - michael@thehermans.org

## Version History

* 1.0
    * Initial Release
* 1.1
    * Changed to return object instead of single value


