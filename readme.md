Angular2 Starter base project for learning.

1) Open a command prompt in the project's root directory (APM)

2) Type: `npm install`
    This installs the dependencies as defined in the package.json file.
    
3) Type: `npm start`
    This launches the TypeScript compiler (tsc) to compile the application and wait for changes. 
    It also starts the lite-server and launches the browser to run the application.

4) Download Kdiff3 and configure it as merge and diff tool as
    git config --global --add merge.tool kdiff3
    git config --global --add mergetool.kdiff3.path "C:/Program Files/KDiff3/kdiff3.exe"
    git config --global --add mergetool.kdiff3.trustExitCode false

    git config --global --add diff.guitool kdiff3
    git config --global --add difftool.kdiff3.path "C:/Program Files/KDiff3/kdiff3.exe"
    git config --global --add difftool.kdiff3.trustExitCode false
