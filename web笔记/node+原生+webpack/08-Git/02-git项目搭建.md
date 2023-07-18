## 项目开发流程

#### 1. 搭建远程仓库

这个工作在小组内，由一个人完成。

#### 2.拉取项目搭建项目的基本结构

这个工作在小组内，由同一个人完成。

1. 克隆项目
2. 进入到项目的目录打开bash

3. 过滤掉不需要上传的文件夹以及文件

4. 搭建后端的express

```bash
npx express-generator
```

这个命令会直接在当前目录下创建好所有的目录结构

5. 安装依赖

```bash
npm install
```

6. 构建项目的基本需求

- 修改端口号

- 链接数据库

- 搭建mvc架构，controller以及基本的路由搭配好，
- 处理跨域

- 将所有所需的依赖安装好

7. 由组长将项目提交到远程仓库

```bash
git add .
git commit -m '项目搭建完成'
git push
```

8. 将对应的组员拉入到该项目中
9. 其他组员就拉取项目

10. 所有成员都要先安装一次依赖，项目才能跑起来
11. 写自己对应的模块

## 所有成员包含组长做的事情

#### 使用Git的分支系统

每一个仓库中，对应的每一个成员都有一个自己的分支

1. 创建自己的分支（子分支）

```bash
git checkout -b “子分支名”

#例子
git checkout -b zhangxiao
```

后续所有的开发都在子分支完成，主分支只负责合并代码以及提交到远程

2. 切换分支

```bash
#例子
git checkout zhangxiao
```

3. 可以在自己的分支上去开发项目,某个阶段开发完之后就可以提交代码到本地仓库·`git add. | git commit -m 'xxx'`，这次提交实在子分支上完成的

4. 切换回主分支

```bash
git checkout master
```

5. 将子分支的代码合并到主分支上

```bash
git merge 子分支名

git merge zhangxiao
```

6. 提交主分支代码到远程仓库

```bash
git pull
```

如果遇到了冲突，先解决冲突

- 在主分支上先将代码存到本地仓库

```bash
git add .
git commit -m 'xxx'
```

在切换到自己的分支上

```bash
git checkout zhangxiao
```

合并主分支的代码过来

```bash
git merge master
```

循环的去执行`git add .  | git commit -m 'xxx' | git checkout master | git push`