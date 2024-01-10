# All essential git commnad

### some useful command
- git init
- git add
- git commit
- git log
- git reset 
- git show
- git branch
- git clone

***A Diaframe how git work*** </br>
working | Stagging | Local |
| :-:  | :-: |  :-: | 
|git add -->|git commit -->|    |
|<-- git reset --hard head^|<-- git reset head^|<-- git reset --soft head^|


### Command discription
<span style="color:yellow">git init :</span> This command set your project git. 

<span style="color:yellow">git add :</span> when you do somthing change this command and keep your changes on stage. 
- <span style="color:#fff">git add . :</span> not all. but work well
- <span style="color:#fff">git add --all/-a :</span> all are adding

<span style="color:yellow">git commit :</span> when you do somthing change this command and keep your changes on commit.
**git add --all && git commit -m "message"** This command will work commbindly.

<span style="color:yellow">git log :</span> It will show your recent 2 or 3 commit histry.
- <span style="color:#fff">git log --oneline :</span> show all histry but shortly

<span style="color:yellow">git reset :</span> How to back on previous commit.

- <span style="color:#fff">git reset head^ :</span>This command switch your current commit on working direactory.

- <span style="color:#fff">git reset head~(1,2..) :</span> This command help you jupping over number.It will change the HEAD for that num direction.

- <span style="color:#fff">git reset --soft head^ :</span> HEAD mean your recent commit. So command switch your current commit on stage.


- <span style="color:#fff">git reset --hard head^ :</span>This command switch your current on your next commit. what you do with your current commit all are erase. mainly It delete your all new work.

<span style="color:yellow">git show :</span> It will show what changes do on your HEAD. You can chage HEAD direaction.

- <span style="color:#fff">git reset head~(1 or 2,3..) :</span> If you want to change HEAD possition and see what was done and what was the changes in that commit.

<span style="color:yellow">git branch :</span> It will show how many branch i have. It's have bunch of elated command list.

- <span style="color:#fff">git checkout -b (branch name):</span> It will create a branch for that provide name.

- <span style="color:#fff">git branch -d/D (branch name):</span> It will delete branch for that provide name.

- <span style="color:#fff">git checkout (branch name):</span> It will take away this branch which are provide branch name.

<span style="color:yellow">git clone :</span> It will cloning all data from local server to your folder.

- <span style="color:#fff">git clone (link):</span> It will clone your folder for that provided link.

- <span style="color:#fff">git clone -b (branch name) (link):</span> It will cloning particular one branch;

