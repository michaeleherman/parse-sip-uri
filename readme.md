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

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Authors

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)