module.exports = function() {
    process.stdout.on('data', (data) => {
        const cmd = data.toString().trim();
        //console.log(cmd); 
        //process.stdout.write(cmd);
      
        if(cmd === 'pwd'){
            process.stdout.write(process.cwd()); 
        }

        process.stdout.write('\npromt > ');
    });
};