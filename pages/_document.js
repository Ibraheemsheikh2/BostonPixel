import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html
			lang="en"
			className="js sizes customelements history pointerevents postmessage webgl websockets cssanimations csscolumns csscolumns-width csscolumns-span csscolumns-fill csscolumns-gap csscolumns-rule csscolumns-rulecolor csscolumns-rulestyle csscolumns-rulewidth csscolumns-breakbefore csscolumns-breakafter csscolumns-breakinside flexbox picture srcset webworkers"
		>
			<Head>
				<link rel="icon" href="/favicon/favicon.ico" />
				
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
				<script async src="/js/vendor/modernizr-3.5.0.min.js" />
				<script async src="/js/jquery.min.js" />
				<script async src="/js/plugin.min.js" />
				<script async src="/js/main.js" />
			</body>
		</Html>
	);
}
