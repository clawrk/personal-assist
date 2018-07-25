import subprocess
import os
import sys


"""
this code will save a file with proper extension .
by default the file will be saved inside D drive.
"""

#input filename and its type
filename=input("Enter the file name\n")
ext=input("Enter the extension\n")
string=filename+"."+ext



"""
the variable dir is set to D: drive by default , which must be changed according to the output extracted from the data file
the data file will give us the folder which will have maximum probability of storing files of that filetype
"""



dir="d:"
os.chdir(dir)



file=open(string , 'w')
#if such a fle exists already then it will be overwritten

file.write("import sys\nimport os\n")
file.close()
