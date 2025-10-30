# 个人博客网站

这是一个使用纯HTML、CSS和JavaScript开发的个人博客网站模板，可以直接上传到GitHub Pages或其他静态网站托管服务。

## 功能特性

- **响应式设计**：适配各种设备屏幕，从手机到桌面电脑
- **现代UI设计**：简洁美观的界面，良好的用户体验
- **完整的页面结构**：首页、博客列表、文章详情、关于页面和联系页面
- **交互功能**：平滑滚动、图片懒加载、导航栏响应式切换等
- **代码高亮**：文章详情页支持代码块高亮显示
- **评论系统**：支持访客评论功能
- **社交媒体分享**：文章分享到主流社交平台

## 项目结构

```
web1/
├── index.html          # 首页
├── blog.html           # 博客列表页
├── about.html          # 关于页面
├── contact.html        # 联系页面
├── css/                # CSS样式文件目录
│   └── style.css       # 主样式文件
├── js/                 # JavaScript文件目录
│   └── main.js         # 主JavaScript文件
├── posts/              # 文章详情页目录
│   └── post-1.html     # 示例文章
├── images/             # 图片资源目录
├── .gitignore          # Git忽略文件
└── README.md           # 项目说明文档
```

## 使用方法

### 1. 克隆或下载项目

将项目克隆到本地或直接下载ZIP文件解压。

```bash
git clone [仓库URL]
```

### 2. 自定义内容

- **修改页面内容**：编辑各个HTML文件，替换为您自己的内容
- **添加新文章**：在`posts/`目录下创建新的HTML文件，并在`blog.html`中添加文章链接
- **更改样式**：修改`css/style.css`文件自定义网站样式
- **替换图片**：在`images/`目录下添加您自己的图片，并在HTML中更新图片路径

### 3. 部署到GitHub Pages

1. 在GitHub上创建一个新的仓库
2. 将本地项目上传到GitHub仓库
3. 在仓库的Settings页面中，找到GitHub Pages选项
4. 选择`main`分支作为源，然后点击Save
5. 稍等片刻，您的博客就会在`https://[username].github.io/[repository]/`上可用

## 自定义指南

### 添加新文章

1. 在`posts/`目录下创建新的HTML文件，例如`my-new-post.html`
2. 复制`post-1.html`的内容作为模板
3. 修改标题、内容、日期等信息
4. 在`blog.html`中添加新文章的卡片链接

### 修改主题

1. 编辑`css/style.css`文件
2. 修改颜色变量、字体、布局等
3. 保存并刷新页面查看效果

### 更换头像和图片

1. 将您的图片放入`images/`目录
2. 在HTML文件中更新图片路径
3. 建议图片使用适当的尺寸和压缩比例以提高加载速度

## 浏览器兼容性

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)
- IE 11 (部分功能可能受限)

## 性能优化建议

1. 压缩CSS和JavaScript文件
2. 优化图片大小和格式
3. 启用浏览器缓存
4. 使用CDN加速静态资源加载
5. 实现按需加载非关键资源

## License

本项目采用MIT许可证。详见LICENSE文件。

## 致谢

- [Font Awesome](https://fontawesome.com/) - 提供图标支持
- [Google Fonts](https://fonts.google.com/) - 提供字体支持

## 联系我

如果您有任何问题或建议，欢迎通过以下方式联系我：

- 邮箱：contact@example.com
- GitHub：[github.com/username](https://github.com/username)
- 微博：[@username](https://weibo.com/username)

祝您使用愉快！