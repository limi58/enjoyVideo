# 以这个AV项目为例git教程（也适用所有git）

## 注册github
网址：https://github.com

## 安装git
[下载git](https://git-for-windows.github.io/)，然后安装，一直下一步（安装路径自己选）  

## 安装生效
安装完成之后打开命令行，输入 `git --version` ，如果成功出现版本号的话就成功了；如果没有就挨重启，但是如果你想马上生效又不想重启呢，那就在命令行把你刚刚装的git所在目录的bin目录set进环境变量；如果不会set呢，噗噗噗那只有重启吧

## 最后配置
```
$ git config --global user.name "你github用户名"
$ git config --global user.email "你github邮箱"
```

## 配置SSH（可选，但是强烈建议）
为毛强烈建议？不然以后每次push和pull都要输入用户名和密码，手会断的  
官方参考：https://help.github.com/articles/generating-ssh-keys/  
```
$ ssh-keygen -t rsa -b 4096 -C "你注册的邮箱"
```
然后一路回车，然后最后会出现这样的成功信息：
```
Your identification has been saved in /Users/you/.ssh/id_rsa.
Your public key has been saved in /Users/you/.ssh/id_rsa.pub.
The key fingerprint is:
01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db your_email@example.com
```
然后在开始-程序里找到git bash，打开，输入
```
$ ssh-add ~/.ssh/id_rsa
```
然后继续在git bash里
```
$ clip < ~/.ssh/id_rsa.pub
```
这样的话ssh key就在你的剪贴板里了，不信粘贴出来看看  
然后打开github.com，进入setting，如图  
![](https://help.github.com/assets/images/help/settings/userbar-account-settings.png)
在用户设置侧边栏选择SSH keys，如图  
![](https://help.github.com/assets/images/help/settings/settings-sidebar-ssh-keys.png)
点击Add SSH key.如图  
![](https://help.github.com/assets/images/help/settings/ssh-add-ssh-key.png)
在title字段里随便填，一般填你的设备名字，然后key里就填你刚刚剪贴板里面的东西，如图  
![](https://help.github.com/assets/images/help/settings/ssh-key-paste.png)
最后add key  
为了验证到底添加ssh成功没，继续在git bash里：
```
$ ssh -T git@github.com
```
如要选择yes no就填yes，如果出现下面的，就成功了:
```
Hi username! You've successfully authenticated, but GitHub does not
provide shell access.
```
不成功的话就看看前面步骤对不对，实在不行就群里@米不过分吧~。~
