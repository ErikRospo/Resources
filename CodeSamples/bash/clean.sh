alias clean='echo -n "Really clean this directory?"; read yes; if test "$yes" = "y"; then rm -f \#* *~ .*~ *.bak .*.bak  *.tmp .*.tmp core a.out; echo "Cleaned."; else echo "Not cleaned."; fi'
