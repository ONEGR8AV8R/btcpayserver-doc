(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{686:function(e,t,r){"use strict";r.r(t);var o=r(26),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"troubleshooting-an-issue-in-btcpay-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-an-issue-in-btcpay-server"}},[e._v("#")]),e._v(" Troubleshooting an issue in BTCPay Server")]),e._v(" "),r("p",[e._v("Facing a problem is never fun. This document explains the most common workflow and steps you should take to identify the issue you're having more easily and hopefully solve it yourself or with community help.")]),e._v(" "),r("p",[e._v("Identifying the problem is crucial.")]),e._v(" "),r("h2",{attrs:{id:"1-replicating-the-issue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#1-replicating-the-issue"}},[e._v("#")]),e._v(" 1. Replicating the issue")]),e._v(" "),r("p",[e._v("First and foremost, try to determine when the issue happens. Try to replicate the problem. Try to update and restart your server to verify you can reproduce your issue. If you think it will describe your issue better, take a screenshot.")]),e._v(" "),r("h3",{attrs:{id:"11-updating-the-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#11-updating-the-server"}},[e._v("#")]),e._v(" 1.1 Updating the server")]),e._v(" "),r("p",[e._v("Check "),r("RouterLink",{attrs:{to:"/FAQ/FAQ-ServerSettings/#how-can-i-see-my-btcpay-version"}},[e._v("your version of BTCPay")]),e._v(". If it is much older than the "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest version"),r("OutboundLink")],1),e._v(" of BTCPay, "),r("RouterLink",{attrs:{to:"/FAQ/FAQ-ServerSettings/#how-to-update-btcpay-server"}},[e._v("updating your server")]),e._v(" may resolve the issue.")],1),e._v(" "),r("h3",{attrs:{id:"12-restarting-the-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#12-restarting-the-server"}},[e._v("#")]),e._v(" 1.2 Restarting the server")]),e._v(" "),r("p",[e._v("Restarting your server is an easy way to solve many of the most common BTCPay Server issues. You may need to "),r("RouterLink",{attrs:{to:"/FAQ/FAQ-ServerSettings/#how-to-ssh-into-my-btcpay-running-on-vps"}},[e._v("SSH into your server")]),e._v(" to restart it.")],1),e._v(" "),r("h3",{attrs:{id:"13-restarting-a-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#13-restarting-a-service"}},[e._v("#")]),e._v(" 1.3 Restarting a service")]),e._v(" "),r("p",[e._v("Some issues you may only need to restart a particular service in your BTCPay Server deployment. Such as restarting the letsencrypt container to renew the SSL certificate.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver-docker\ndocker restart letsencrypt-nginx-proxy-companion\n")])])]),r("p",[e._v("Use "),r("code",[e._v("docker ps")]),e._v(" to find the name of a different service you would like to restart.")]),e._v(" "),r("h2",{attrs:{id:"2-looking-through-the-logs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#2-looking-through-the-logs"}},[e._v("#")]),e._v(" 2. Looking through the logs")]),e._v(" "),r("p",[e._v("Logs can provide an essential piece of information. In the next few paragraphs, we will describe how to get the log information for various parts of BTCPay.")]),e._v(" "),r("h3",{attrs:{id:"21-btcpay-logs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#21-btcpay-logs"}},[e._v("#")]),e._v(" 2.1 BTCPay Logs")]),e._v(" "),r("p",[e._v("Since the v1.0.3.8, you can easily access BTCPay Server logs from the front-end. If you are a server admin, go to "),r("strong",[e._v("Server Settings > Logs")]),e._v(" and open the logs file. If you don't know what a particular error in the logs means, make sure to mention it when troubleshooting.")]),e._v(" "),r("p",[e._v("If you would like more detailed logs and you're using a Docker deployment, you can view logs of specific Docker containers using the command line. See these "),r("RouterLink",{attrs:{to:"/FAQ/FAQ-ServerSettings/#how-to-ssh-into-my-btcpay-running-on-vps"}},[e._v("instructions to ssh")]),e._v(" into an instance of BTCPay running on a VPS.")],1),e._v(" "),r("p",[e._v("Below is a general list of the container names used for BTCPay.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("LOGS FOR")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("CONTAINER NAME")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("BTCPayServer")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("generated_btcpayserver_1")])]),e._v(" "),r("tr",[r("td",[e._v("NBXplorer")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("generated_nbxplorer_1")])]),e._v(" "),r("tr",[r("td",[e._v("Bitcoind")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("btcpayserver_bitcoind")])]),e._v(" "),r("tr",[r("td",[e._v("Postgres")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("generated_postgres_1")])]),e._v(" "),r("tr",[r("td",[e._v("proxy")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("letsencrypt-nginx-proxy-companion")])]),e._v(" "),r("tr",[r("td",[e._v("Nginx")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("nginx-gen")])]),e._v(" "),r("tr",[r("td",[e._v("Nginx")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("nginx")])]),e._v(" "),r("tr",[r("td",[e._v("c-lightning")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("btcpayserver_clightning_bitcoin")])]),e._v(" "),r("tr",[r("td",[e._v("LND")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("btcpayserver_lnd_bitcoin")])]),e._v(" "),r("tr",[r("td",[e._v("RTL")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("generated_lnd_bitcoin_rtl_1")])]),e._v(" "),r("tr",[r("td",[e._v("LibrePatron")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("librepatron")])]),e._v(" "),r("tr",[r("td",[e._v("Tor")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("tor-gen")])]),e._v(" "),r("tr",[r("td",[e._v("Tor")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("tor")])])])]),e._v(" "),r("p",[e._v("Run the commands below to print logs by container name. Replace the container name to view other container logs.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver-docker\ndocker "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v("\ndocker logs --tail "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" generated_btcpayserver_1\n")])])]),r("h3",{attrs:{id:"22-lightning-network-logs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#22-lightning-network-logs"}},[e._v("#")]),e._v(" 2.2 Lightning Network Logs")]),e._v(" "),r("p",[e._v("Use the following if you're having a problem with the Lightning Network.")]),e._v(" "),r("h3",{attrs:{id:"221-lightning-network-lnd-docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#221-lightning-network-lnd-docker"}},[e._v("#")]),e._v(" 2.2.1 - Lightning Network LND - Docker")]),e._v(" "),r("p",[e._v("There are a few ways to access your LND logs when using Docker. First log in as root:")]),e._v(" "),r("p",[r("code",[e._v("sudo su -")])]),e._v(" "),r("p",[e._v("Navigate to the correct directory:")]),e._v(" "),r("p",[r("code",[e._v("cd btcpayserver-docker")])]),e._v(" "),r("p",[e._v("Find container name:")]),e._v(" "),r("p",[r("code",[e._v("docker ps")])]),e._v(" "),r("p",[e._v("Print logs by container name:")]),e._v(" "),r("p",[r("code",[e._v("docker logs --tail 100 btcpayserver_lnd_bitcoin")])]),e._v(" "),r("p",[e._v("Alternatively, you can quickly print logs by using container ID (only the first unique ID characters are needed, such as the two furthest left characters):")]),e._v(" "),r("p",[r("code",[e._v("docker logs 'add your container ID '")])]),e._v(" "),r("p",[e._v("If for any reason you need more logs")]),e._v(" "),r("p",[r("code",[e._v("sudo su -")])]),e._v(" "),r("p",[r("code",[e._v("cd /var/lib/docker/volumes/generated_lnd_bitcoin_datadir/_data/logs/bitcoin/mainnet/")])]),e._v(" "),r("p",[e._v("inside that directory do "),r("code",[e._v("ls")])]),e._v(" "),r("p",[e._v("You will see something like "),r("code",[e._v("lnd.log lnd.log.13 lnd.log.15 lnd.log.16.gz lnd.log.17.gz")])]),e._v(" "),r("p",[e._v("To access uncompressed logs of those logs do "),r("code",[e._v("cat lnd.log")]),e._v(" or if you want another one, use "),r("code",[e._v("cat lnd.log.15")])]),e._v(" "),r("p",[e._v("To access compressed logs in .gzip  use "),r("code",[e._v("gzip -d lnd.log.16.gz")]),e._v(" (in this case we're accessing lnd.log.16.gz)")]),e._v(" "),r("p",[e._v("This should give you a new file, where you can do "),r("code",[e._v("cat lnd.log.16")])]),e._v(" "),r("p",[e._v("In case the above does not work, you may need to use install gzip first "),r("code",[e._v("sudo apt-get install gzip")])]),e._v(" "),r("h3",{attrs:{id:"222-lightning-network-c-lightning-docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#222-lightning-network-c-lightning-docker"}},[e._v("#")]),e._v(" 2.2.2 - Lightning Network c-lightning - Docker")]),e._v(" "),r("p",[r("code",[e._v("sudo su -")])]),e._v(" "),r("p",[r("code",[e._v("docker ps")])]),e._v(" "),r("p",[e._v("Find the c-lightning container ID.")]),e._v(" "),r("p",[e._v("docker logs 'add your container ID here'")]),e._v(" "),r("p",[e._v("alternatively, use this")]),e._v(" "),r("p",[r("code",[e._v("docker logs --tail 100 btcpayserver_clightning_bitcoin")])]),e._v(" "),r("p",[e._v("You can also get log information with c-lightning cli command.")]),e._v(" "),r("p",[r("code",[e._v("bitcoin-lightning-cli.sh getlog")])]),e._v(" "),r("h2",{attrs:{id:"23-bitcoin-node-logs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#23-bitcoin-node-logs"}},[e._v("#")]),e._v(" 2.3 - Bitcoin Node Logs")]),e._v(" "),r("p",[e._v("In addition to "),r("a",{attrs:{href:"#2-looking-through-the-logs"}},[e._v("looking at logs")]),e._v(" of your Bitcoind container, you can also use any of the "),r("a",{attrs:{href:"https://developer.bitcoin.org/reference/rpc/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("bitcoin-cli commands"),r("OutboundLink")],1),e._v(" to obtain information from your bitcoin node. BTCPay includes a script to allow you to communicate with your Bitcoin node easily.")]),e._v(" "),r("p",[e._v("Inside the "),r("code",[e._v("btcpayserver-docker")]),e._v(" folder, get the blockchain information using your node:")]),e._v(" "),r("p",[r("code",[e._v("bitcoin-cli.sh getblockchaininfo")])]),e._v(" "),r("h2",{attrs:{id:"3-finding-a-solution-yourself-google-faq-github-issues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#3-finding-a-solution-yourself-google-faq-github-issues"}},[e._v("#")]),e._v(" 3. Finding a solution yourself (Google, FAQ, GitHub issues)")]),e._v(" "),r("p",[e._v("Even though setups differ, the chances that someone else experienced the same issue as yours are pretty high. Take a few moments, Google around and see if you can solve it yourself.")]),e._v(" "),r("h3",{attrs:{id:"31-btcpay-faq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#31-btcpay-faq"}},[e._v("#")]),e._v(" 3.1 BTCPay FAQ")]),e._v(" "),r("p",[e._v("We try to document the most common issues on the "),r("RouterLink",{attrs:{to:"/FAQ/"}},[e._v("Frequently Asked Questions page")]),e._v(". Take a look there and see if your question is recorded.")],1),e._v(" "),r("h3",{attrs:{id:"32-github"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#32-github"}},[e._v("#")]),e._v(" 3.2 GitHub")]),e._v(" "),r("p",[e._v("When there's an advanced technical issue, users usually open an issue on GitHub. Take a look at the BTCPay GitHub repository and browse "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/issues?q=is%3Aissue+is%3Aclosed",target:"_blank",rel:"noopener noreferrer"}},[e._v("search the closed issues"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"33-mattermost"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#33-mattermost"}},[e._v("#")]),e._v(" 3.3 Mattermost")]),e._v(" "),r("p",[e._v("Mattermost chat platform is great for similar issues, other users experienced before you. On the top right-hand corner, click on the search and enter your query.")]),e._v(" "),r("h2",{attrs:{id:"4-asking-for-help"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#4-asking-for-help"}},[e._v("#")]),e._v(" 4. Asking for help")]),e._v(" "),r("p",[e._v("If you're unable to solve the problem yourself, do not worry. There's an amid community ready to help you.")]),e._v(" "),r("p",[e._v("The better you describe the problem, the higher are the chances of getting a timely fix. Be concise and provide as much relevant information as possible. Be sure to include the "),r("RouterLink",{attrs:{to:"/FAQ/FAQ-ServerSettings/#how-can-i-see-my-btcpay-version"}},[e._v("version you're using")]),e._v(" and describe your BTCPay Deployment Setup. Try to explain what you're trying to do and what's the issue. If you can provide the logs. If you think it's relevant, feel free to include a screenshot.")],1),e._v(" "),r("p",[e._v("Here's a good example of how to ask a question.")]),e._v(" "),r("blockquote",[r("p",[e._v("I'm having a problem with XYZ. I can replicate the problem. My BTCPay version is 0.100.31, and I deployed my server on Digital Ocean by following Docker deployment guide. I've searched through the FAQ and closed GitHub issues, but there's no solution to my problem. My BTCPay Setup is XYZ, and the issue is occurring when I do XYZ. Here are the logs I was able to get from my BTCPay instance. You can see the error in the image I attached.")])]),e._v(" "),r("div",{staticClass:"custom-block danger"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("The community will not provide extensive support for custom deployments. i.e. Variations of "),r("RouterLink",{attrs:{to:"/ManualDeployment/"}},[e._v("Manual Deployments")]),e._v(" are expected to be used only for development purposes and by users with technical literacy with the ability to "),r("strong",[e._v("resolve deployment and maintenance issues on their own")]),e._v(".")],1)]),e._v(" "),r("h3",{attrs:{id:"41-asking-the-community-general-problems"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#41-asking-the-community-general-problems"}},[e._v("#")]),e._v(" 4.1 Asking the community (general problems)")]),e._v(" "),r("p",[e._v("For quick answers to fundamental problems, it's best to post a question in #support channel on "),r("a",{attrs:{href:"https://chat.btcpayserver.org/btcpayserver/channels/support",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPay Mattermost"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"42-opening-an-issue-on-github-advanced-problems"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#42-opening-an-issue-on-github-advanced-problems"}},[e._v("#")]),e._v(" 4.2 Opening an Issue on GitHub (advanced problems)")]),e._v(" "),r("p",[e._v("If you have a custom build setup and are facing a complex problem, "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("open an issue on GitHub"),r("OutboundLink")],1),e._v(" so that developers can help you out.")]),e._v(" "),r("h3",{attrs:{id:"43-premium-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#43-premium-support"}},[e._v("#")]),e._v(" 4.3 Premium Support")]),e._v(" "),r("p",[e._v("Some community members provide paid support. If you want a quicker help, check out the list of "),r("RouterLink",{attrs:{to:"/Support/"}},[e._v("members providing premium support")]),e._v(".")],1),e._v(" "),r("h3",{attrs:{id:"44-lightning-network-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#44-lightning-network-support"}},[e._v("#")]),e._v(" 4.4 Lightning Network Support")]),e._v(" "),r("p",[e._v("If you're facing a technical problem with your Lightning Network implementation, you may want to ask questions in their respective communities.")]),e._v(" "),r("h4",{attrs:{id:"441-lnd-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#441-lnd-support"}},[e._v("#")]),e._v(" 4.4.1 LND Support")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/lightningnetwork/lnd/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("LND GitHub"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://lightningcommunity.slack.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lightning Community on Slack"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://webchat.freenode.net/?channels=lightning-dev&uio=d4",target:"_blank",rel:"noopener noreferrer"}},[e._v("#lightning-dev"),r("OutboundLink")],1),e._v(" on IRC")])]),e._v(" "),r("h4",{attrs:{id:"442-c-lightning-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#442-c-lightning-support"}},[e._v("#")]),e._v(" 4.4.2 c-lightning Support")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/ElementsProject/lightning/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("c-lightning GitHub"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://webchat.freenode.net/?channels=lightning-dev&uio=d4",target:"_blank",rel:"noopener noreferrer"}},[e._v("#lightning-dev"),r("OutboundLink")],1),e._v(" on IRC")])])])}),[],!1,null,null,null);t.default=n.exports}}]);