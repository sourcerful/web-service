export const ActivateService = (activation: boolean | undefined): boolean => {
    
    if(typeof activation == undefined){

        return false
    }

    let exec = require("child_process");

    console.log("here\n")

    if(activation){
        let process = exec.spawn("./server", {cwd: '/home/sourcer/repos/udpFileTransfer/AsioProject/server/udpserver/src'})
    
        process.stdout.on('data', (data: any) => {
            console.log(`\nstdout: ${data}`)
        })
        
        process.stdin.write("./assets/random_file")
        process.stdin.end()
        
        process.stdout.on('close', (code: boolean) => {
            console.log(`closed with code: ${code}`)
        })
    }
    else{
        exec.execFile("pkill", ["server"], {cwd: "/home/sourcer/repos/udpFileTransfer/AsioProject/server/udpserver/src"},
        (err: Error, stdout: string | Buffer, stderr: string | Buffer) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(stdout);
        })
    }

    return true
}