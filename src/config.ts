import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Forest",
	subtitle: "Code and Grow",
	lang: "zh_CN", // 语言代码，例如：'en'、'zh_CN'、'ja' 等
	themeColor: {
		hue: 225, // 主题颜色的默认色调，从0到360。例如：红色: 0，蓝绿色: 200，青色: 250，粉色: 345
		fixed: false, // 对访客隐藏主题颜色选择器
	},
	banner: {
		enable: true,
		src: "assets/images/P2.png", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
		position: "top", // 等同于 object-position，仅支持 'top'、'center'、'bottom'。默认为 'center'
		credit: {
			enable: false, // 显示横幅图像的版权文本
			text: "", // 要显示的版权文本
			url: "", // （可选）指向原始作品或艺术家页面的URL链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 表格中显示的最大标题深度，从1到3
	},
	favicon: [
		// ICO格式 - 最佳兼容性
		{ src: "/favicon.ico" },

		// 标准PNG尺寸
		{ src: "/favicon-16x16.png", sizes: "16x16" },
		{ src: "/favicon-32x32.png", sizes: "32x32" },

		// Apple设备支持
		{ src: "/apple-touch-icon.png", sizes: "180x180" },

		// Android设备支持
		{ src: "/android-chrome-192x192.png", sizes: "192x192" },
		{ src: "/android-chrome-512x512.png", sizes: "512x512" },
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/saicaca/fuwari", // 内部链接不应包含基本路径，因为它会自动添加
			external: true, // 显示外部链接图标并在新标签页中打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/P1.jpg", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "Snowy Owl hydrogen flare",
	bio: "ℑ’𝔪 𝔰𝔱𝔦𝔩𝔩 𝔥𝔢𝔯𝔢, 𝔟𝔯𝔢𝔞𝔱𝔥𝔦𝔫𝔤 𝔦𝔫 𝔱𝔥𝔢 𝔩𝔦𝔤𝔥𝔱 𝔬𝔣 𝔞𝔫𝔬𝔱𝔥𝔢𝔯 𝔡𝔞𝔶.",
	links: [
		{
			name: "B站",
			icon: "ant-design:bilibili-filled", // 访问 https://icones.js.org/ 获取图标代码
			// 如果尚未包含相应的图标集，您需要安装它
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://www.bilibili.com/c/information/",
		},
		{
			name: "Steam",
			icon: "logos:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "material-icon-theme:folder-github-open",
			url: "https://github.com/",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（例如背景颜色）正在被覆盖，请参见 astro.config.mjs 文件
	// 请选择暗色主题，因为此博客主题目前仅支持暗色背景颜色
	theme: "github-dark",
};
