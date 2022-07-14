yes|sudo apt update;
yes|sudo apt upgrade;
yes|sudo apt install tmux htop git nodejs python3 python3-pip tree wget nmap man-db info nano build-essential xxd ssh curl;
yes|sudo apt autoremove;
yes|sudo apt autoclean;
cd ~;
mkdir bin
cd ~/bin
wget https://github.com/arl/gitmux/releases/download/v0.7.9/gitmux_0.7.9_linux_amd64.tar.gz -O gitmux.tar.gz;
tar -xf gitmux.tar.gz;
export PATH=$PATH:`pwd`;
cd ~;
curl https://raw.githubusercontent.com/ErikRospo/Resources/main/CodeSamples/bash/.bash_aliases > ~/.bash_aliases
curl https://raw.githubusercontent.com/ErikRospo/Resources/main/CodeSamples/bash/.tmux.conf > ~/.tmux.conf
curl https://raw.githubusercontent.com/ErikRospo/Resources/main/CodeSamples/bash/.bashrc > ~/.bashrc
