import subprocess
import os
import sys
os.chdir("d:")
string=input("Enter the python file name\n")
string=string+".py"
file=open(string,'w')
#if such a fle exists already then it will be overwritten
file.write("import sys\nimport os\nfrom PyQt5 import QtWidgets,QGui")
file.close()
