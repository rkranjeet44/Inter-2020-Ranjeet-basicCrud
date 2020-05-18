exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};


/*var main = function () { 
    // Your main method
    
} 
if (require.main === module) { 
    main(); 
}*/