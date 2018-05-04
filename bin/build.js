// Cross-platform build script

const osName = require('os').type();
const exec = require('child_process').exec;

console.log("Found OS type: " + osName);

function puts(error, stdout, stderr){
    console.log(stdout);
    if(error){
        console.log("Error running platform-dependent build script.");
        console.log(error);
        process.exit(1);
    }else{
        console.log("Finished running platform-dependent build script.");
    }
}

if(osName === "Windows_NT" || osName === "WindowsNT"){
    console.log("Running windows build process...");
    exec("npm run build-win", puts);
}else{
    console.log("Running unix build process...");
    exec("npm run build-unix", puts);
}
