import os
import subprocess

"""
this python file will navigate through the host computer .
The algorithm used is BFS.
this function filters the outcome of DIR command and gives
us folder names for further BFS
"""

os.chdir('D:/')

def getchild(new,dirv):
    os.chdir(dirv)
    f=open('readthis.txt','w')
    a=subprocess.check_output('dir',shell=True)
    f.write(str(a))
    f.close()


    with open('readthis.txt','r') as f:
        prev="something"
        for line in f:
            
            temptemp=""
            decider=False
            
            for word in line.split():
                temp=[]
                
                if word=="<DIR>":
                    prev="<DIR>"
                    continue
                
                if prev=="<DIR>":
                    prevletter="h"
                    letter="k"
                    
                    for letter in word:
                    
                        if letter=="\\" :
                           break
                    
                        temp.append(letter)
                        prevletter=letter
                        
                    if(letter!="\\"):
                        
                        if(not decider):
                            
                            temptemp=temp
                            
                        else:
                            
                            temptemp+=" "
                            temptemp+=temp
                            
                        decider=True
                        continue
                    
                    if(decider):
                        
                        temptemp+=" "
                        temptemp+=temp
                        temp=temptemp
                
                    prev="somet"
                    if(prevletter=="." and letter=="\\"):
                        continue
                    temp=''.join(temp)
                    #print(temp)
                    decider=False
                    new.append(temp)

    os.remove('readthis.txt')
        

def bfs(dirv):
    q=[]
    q.append(dirv)
    blocked={}
    blocked["Git"]=True
    #add the path of folder which you don't want to traverse.

    """
        the blocked dictionary makes sure that our program doesn't visit unnecessary nodes
        like ,when i built this program and tested it, the git path occupied a lot of memory as
        it had a lot of ,well lots of folders inside it and my program just wouldn't stop
        Note: instead  of dictionary , use an uordered set as we just need to mark it's presence
    """

    #following is the BFS Code
    foldercount=0
    while len(q):
        s=q[0]
        del q[0]
        #print(len(q))
        blocked[s]=True
        a=''.join(s)
        temp=[]
        getchild(temp,a)

        for path in temp:
            #print(path)

            if path not in blocked: 
                #print(''.join(path))
                q.append(a+''.join(path)+"/")
                #print(a+''.join(path)+"/")
                foldercount+=1


    return foldercount




