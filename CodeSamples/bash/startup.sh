sudo apt update;
sudo apt upgrade;
sudo apt install tmux htop git nodejs python3 python3-pip tree wget nmap man-db info nano build-essential xxd ssh curl;
sudo apt autoremove;
sudo apt autoclean;
cd ~;
mkdir bin
cd ~/bin
wget https://github.com/arl/gitmux/releases/download/v0.7.9/gitmux_0.7.9_linux_amd64.tar.gz;
wget https://github.com/arl/gitmux/releases/download/v0.7.9/checksums.txt;
let hash256=`sha256sum gitmux_0.7.9_linux_amd64.tar.gz`
if grep -Fxq "$hash256" checksums.txt
then
    tar -xf gitmux-0.7.9_linux_amd64.tar.gz;
    export PATH=$PATH:`pwd`;
    cd ~;
    curl https://raw.githubusercontent.com/ErikRospo/Resources/main/CodeSamples/bash/.bash_aliases > ~/.bash_aliases
    curl https://raw.githubusercontent.com/ErikRospo/Resources/main/CodeSamples/bash/.tmux.conf > ~/.tmux.conf
    curl https://raw.githubusercontent.com/ErikRospo/Resources/main/CodeSamples/bash/.bashrc > ~/.bashrc
else
    echo "hash does not match";
    echo "Got:";
    echo "$hash256";
    echo "Expected one of:";
    cat checksums.txt
fi
