# 语言障碍儿童交流应用 / Speech App for Children with Language Impairments

## 项目介绍 / Project Introduction

本项目适用于语言障碍儿童交流使用。  
这是一个非盈利开源项目（MIT LICENSE)，将日常生活语言里常用词汇分割成模块按钮，语言障碍儿童可以通过按按钮的方式与他人进行沟通。目前仅支持中文。

This project is designed for communication for children with language impairments.  
It is a non-profit open-source project (MIT License), which divides common words in daily life into modular buttons. Children with language impairments can communicate with others by pressing these buttons. This project only supports Chinese currently.

## 项目公开网址 / Public Website

### https://baobeishuoshuo.org/

## 安装本项目 / Installation

### 1. 通过npm编译 / Using npm
首先安装最新的node.js / Install latest node.js first

```bash
git clone https://github.com/lizihaoleo/speech-app.git
cd speech-app
npm install
npm start
```

### 2. 通过Docker启动 / Using Docker

安装Docker Desktop或其他版本Docker / Install Docker Desktop or another version of Docker

启动Docker / Start Docker
```bash
git clone https://github.com/lizihaoleo/speech-app.git
cd speech-app
docker build -t {yourusername}/speech-app:latest .
docker run -dp 3000:3000 {yourusername}/speech-app:latest
```
完成安装后将可以通过地址http://localhost:3000访问该项目内容。

## 许可证 / License
MIT License