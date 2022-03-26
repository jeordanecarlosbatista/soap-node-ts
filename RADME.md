# WebService SOAP in NodeJs

### Link WSDL
http://gerenciador-java.herokuapp.com/wsdl?wsdl

Request test

```
curl --location --request POST 'http://gerenciador-java.herokuapp.com/wsdl' \
--header 'SOAPAction: GetBook' \
--header 'Content-Type: application/xml' \
--data-raw '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:book="http://www.cleverbuilder.com/BookService/">
   <soapenv:Header/>
   <soapenv:Body>
      <book:GetBook>
         <ID>1</ID>
      </book:GetBook>
   </soapenv:Body>
</soapenv:Envelope>'

```