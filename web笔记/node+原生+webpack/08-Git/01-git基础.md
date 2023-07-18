## Git的基本使用

git是一个代码的版本管理工具。

git也能够实现团队代码的管理。

#### 工作流程：

![image-20220524121652240](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/zhangxiao/202304102245757.png)

#### 使用Git

1. 安装git工具

2. 注册Gitee

3. 初始化配置

```bash
git config --global user.name "zhangxiao"
git config --global user.email "zhangxiao@gmail.com"
```

配置用户名以及邮箱，但是这里可以任意填写，这里只是一个代号。

4. 创建远程仓库

5. 将创建好的仓库通过git克隆到本地电脑

```bash
git clone 仓库对应的地址
```

<img src="C:\Users\douyaJ\AppData\Roaming\Typora\typora-user-images\image-20230411155107810.png" alt="image-20230411155107810" style="zoom:33%;" />

出现这个的时候填写gitee的用户名和密码

克隆完毕之后，需要进到克隆下来的文件夹下，再次打开bash，看到master就算成功

#### 上传代码

1. 上传到暂存区

```bash
git add .
```

注意：提交后会出现warning的警告，不要慌，在执行一次`git add .`的命令

2. 提交代码到本地仓库

```bash
git commit -m '本次提交的相关修改的代码信息'
#例子
git commit -m '提交的电影接口完成'
```

3. 查看提交的日志

```bash
git log
```

4. 提交到远程仓库

```bash
git push
```

5. 如果在提交的时候出现报错，就代表远程的代码以及被其他人修改过了，你在提交的时候就会报错

![image-20230411171055581](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/zhangxiao/202304111711264.png)

这个时候我们需要先拉取远程仓库中最新的代码到本地。

```bash
git pull
```

拉取代码下来之后注意关注代码的变化，有可能会出现冲突，就需要在vscode中解决冲突

![image-20230411171105391](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/zhangxiao/202304111711418.png)

一般来说都会保留双方的代码。

代码在处理冲突之后有需要重复执行git add .    | git commit -m ‘***’  | git push

#### 版本回退

1. 查看提交日志

```bash
git log
```

2. 回退命令

需要通过日志拿到commit的id将id在回退命令中使用

```bash
git reset --hard 4c88c6fe59336221135c299750116c7244594cb9
```

在操作的过程中进入到了编辑界面，退不出去时就执行`:q`