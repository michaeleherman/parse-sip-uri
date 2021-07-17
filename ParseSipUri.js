exports.parseSipUri = function (sipUri) {
    const respObj = {};
    const colonIndex = sipUri.indexOf(":");
    const atIndex = sipUri.indexOf(`@`);
    const semiColonIndex = (sipUri.includes(";") && sipUri.indexOf(";")) || sipUri.length ;
    respObj.Protocol = sipUri.substring(0, colonIndex);
    respObj.User = sipUri.substring(colonIndex + 1, atIndex);
    respObj.Domain = sipUri.substring(atIndex + 1, semiColonIndex);
    respObj.TransportProtocol = getProtocol(sipUri);
    if (respObj.User.length == 10) {
        respObj.E164Number = `+1${respObj.User}`;
    } else if (respObj.User.length == 11) {
        respObj.E164Number = `+${respObj.User}`;
    }
    respObj.encodedURIComponentNumber = encodeURIComponent(respObj.E164Number);

    return respObj;
}

function getProtocol(parameters) {
    parameters.toLowerCase();
    const transport = "transport=";
    if (parameters.indexOf(transport) == -1) {
        return "udp";
    }
    const protocolLength = 3;
    const protocolStartPos = parameters.indexOf(transport) + transport.length;
    const protocolEndPos = protocolStartPos + protocolLength;
    return parameters.substring(protocolStartPos, protocolEndPos);
}