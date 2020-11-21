## Git 协作流程
> Git全局配置（必须）

```sh
git config --global user.name "你的昵称"
git config --global user.email "邮箱地址"
```

#### 1.拉取远程项目
```sh
git clone 自己到仓库地址
```
#### 2.拉取devlop分支到本地，并切换到此分区
```sh
git checkout -b develop origin/develop
```
#### 3.创建feature-pig224-v0.0.1,并切换到此分区
> ⚠️ 注意：feature命名规范feature-英文名-版本号

```sh
# 从远程develop分支检出到本地feature分支
git pull origin develop
git checkout -b feature-alias origin/develop
```
#### 4.代码开发

> ⚠️ 注意：代码开发不要有冲突，尽量不要删除别人的文件。规范创建自己的文件及文件夹。

#### 5.提交代码
```sh
# 提交代码到暂存区
git add .
# 提交代码到本地分支仓库
git commit -m "提交说明"
```

#### 6. 推送代码
```sh
# 切换到develop分支
git checkout develop

# 更新远程develop分支到本地develop分支
git pull origin develop

# 合并本地feature分支到本地develop分支
git merge feature-pig224-v0.0.1

# 推送代码到远程仓库
git push origin develop
```

#### 7. Pull Request

> Gitee后台请求Pull Request到主要仓库

## Git 常用命令

#### 1.拉取项目
```sh
git clone [url]
```

#### 2.设置提交代码时的用户信息
```sh
git config [--global] user.name "[name]"
git config [--global] user.email "[email address]"
```

#### 3.添加文件到暂存区
```sh
git add [file1] [file2]

# 添加当前目录全部文件到暂存区
git add .
```

#### 4.删除暂存区的文件
```sh
# 删除工作区文件，并且将这次删除放入暂存区
git rm [file1] [file2] ...
```

#### 5.代码提交仓库区
```sh
# 提交暂存区到仓库区
git commit -m [message]
```

#### 6.分支
```sh
# 更新远程分支信息到本地
git remote update origin -p

# 列出所有本地分支和远程分支
git branch -a

# 拉取远程分支到本地指定分支
git checkout -b [remote] [branch-name]

# 新建一个分支，但依然停留在当前分支
git branch [branch-name]

# 切换到指定分支，并更新工作区
git checkout [branch-name]

# 删除本地分支
git branch -d [branch-name]

# 删除远程分支
git push origin --delete [branch-name]
git branch -dr [remote/branch]
```

#### 7. 标签
```sh
# 列出所有tag
git tag

# 新建一个tag在当前commit
git tag [tag]

# 删除远程tag
git push origin :refs/tags/[tagName]

# 查看tag信息
git show [tag]

# 提交指定tag
git push [remote] [tag]

# 提交所有tag
git push [remote] --tags

# 新建一个分支，指向某个tag
git checkout -b [branch] [tag]
```

#### 8.远程同步
```sh
# 下载远程仓库的所有变动
git fetch [remote]

# 显示所有远程仓库
git remote -v

# 显示某个远程仓库的信息
git remote show [remote]

# 增加一个新的远程仓库，并命名
git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
git pull [remote] [branch]

# 上传本地指定分支到远程仓库
git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
git push [remote] --force

# 推送所有分支到远程仓库
git push [remote] --all
```
#### 9.查看信息
```sh
# 显示有变更的文件
git status

# 显示当前分支的版本历史
git log

# 显示commit历史，以及每次commit发生变更的文件
git log --stat

# 搜索提交历史，根据关键词
git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
git log --follow [file]
git whatchanged [file]

# 显示指定文件相关的每一次diff
git log -p [file]

# 显示过去5次提交
git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
git blame [file]

# 显示暂存区和工作区的差异
git diff

# 显示暂存区和上一个commit的差异
git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
git diff HEAD

# 显示两次提交之间的差异
git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
git show [commit]

# 显示某次提交发生变化的文件
git show --name-only [commit]

# 显示某次提交时，某个文件的内容
git show [commit]:[filename]

# 显示当前分支的最近几次提交
git reflog
```
#### 10.撤销
```sh
# 恢复暂存区的指定文件到工作区
git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
git checkout .

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
git reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
git reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
git revert [commit]

# 暂时将未提交的变化移除，稍后再移入
git stash
git stash pop
```