# personal-assist
If a user wants to save a file/folder or open an existing file/folder , he/she has to manually enter the names of folder/file with the required  extensions for most accurate results . 

I have created a python script which will iterate through and store the names of all the folders which are present on a host .
The algorithm used is BFS with any drive name as the root. 

The information extracted must be saved in a format from which it can be quickly extracted when required.

With this information , I know where  files with  particular extensions are , and Now if a user wants to save/open a file with a particular extension , the file will automatically be saved in a directory in which  the density of such files is maximum . If the user desires to save/open  to/from a different folder ,then the normal procedure will be followed .
For saving a file to a location , I have used file handling.

The information must be regularly updated and since the data is stored on hard drive , I cannot use normal search and hashing methods for extracting required data hence the seemingly obvious data structures are B- Tree and Extendible Hashing.

What I require basically is a hash table which stores the strongest resembling filetype folder against filetypes.
for example , if there are 3 folders : f1 , f2 and f3 and f1 contains 50% .py files and f1 and f2 contain 20% .py files ( and the number of files is almost same in all these folders .) then by default the files should be saved in f1.

I have , uptill now coded the part in which I perform BFS using python. Now , The next step is to select a proper data structure to store the extracted data . 

If someone is willing to join me in this project , then please contact me asap.

The python file is - navigate.py
