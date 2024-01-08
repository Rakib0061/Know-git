# All essential git commnad

### some useful command
- git init
- git add
- git commit
- git log
- git reset 
- git show

***A Diaframe how git work*** </br>
working | Stagging | Local |
| :-:  | :-: |  :-: | 
|git add -->|git commit -->|    |
|<-- git reset --hard head^|<-- git reset head^|<-- git reset --soft head^|


### Command discription
<span style="color:yellow">git init :</span> This command set your project git. 

<span style="color:yellow">git add :</span> when you do somthing change this command and keep your changes on stage. 
- <span style="color:#fff">git add . :</span> 
- <span style="color:#fff">git add --all/-a :</span> 

<span style="color:yellow">git commit :</span> when you do somthing change this command and keep your changes on commit.
**git add --all && git commit -m "message"** This command will work commbindly.

<span style="color:yellow">git log :</span> It will show your recent 2 or 3 commit histry.
- <span style="color:#fff">git log --oneline :</span> show all histry but shortly

<span style="color:yellow">git reset :</span> It will reset your work. If you make stage but want to make reset OR commit want to reset.
- <span style="color:#fff">git reset --soft head^ :</span> HEAD mean your recent commit. So command switch your current commit on stage.

- <span style="color:#fff">git reset head^ :</span>This command switch your current commit on working area.

- <span style="color:#fff">git reset --hard head^ :</span>This command switch your current on your next commit. what you do with your current commit all are erase.
