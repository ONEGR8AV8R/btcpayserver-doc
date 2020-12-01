(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{376:function(e,t,r){e.exports=r.p+"assets/img/AzureResourceConfig.5eb883b1.png"},377:function(e,t,r){e.exports=r.p+"assets/img/AzureBTCPayServerPublicIP.a2a47f78.png"},610:function(e,t,r){"use strict";r.r(t);var o=r(26),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"azure-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#azure-deployment"}},[e._v("#")]),e._v(" Azure Deployment")]),e._v(" "),o("p",[e._v("This setup is similar to the "),o("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Deployment"),o("OutboundLink")],1),e._v(", except that the "),o("code",[e._v("docker-compose")]),e._v(" is hosted by Microsoft Azure.")]),e._v(" "),o("h2",{attrs:{id:"one-click-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#one-click-setup"}},[e._v("#")]),e._v(" One-click setup")]),e._v(" "),o("p",[e._v("Start by clicking the following button:")]),e._v(" "),o("figure",[o("a",{attrs:{href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fbtcpayserver%2Fbtcpayserver-azure%2Fmaster%2Fazuredeploy.json",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://azuredeploy.net/deploybutton.svg",alt:"Deploy to Azure"}}),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("You can log into "),o("a",{attrs:{href:"https://azure.microsoft.com/en-us/account/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure"),o("OutboundLink")],1),e._v(" with your Microsoft account.")]),e._v(" "),o("p",[e._v("Final installation steps:")]),e._v(" "),o("p",[e._v("Fill in the remaining options: "),o("img",{attrs:{src:r(376),alt:"Azure Resource Config"}})]),e._v(" "),o("ul",[o("li",[e._v("Click 'Purchase' to confirm")]),e._v(" "),o("li",[e._v("(Wait for Azure deployment)")]),e._v(" "),o("li",[e._v("Type "),o("code",[e._v("ip")]),e._v(" into the search bar and select the first option, "),o("code",[e._v("BTCPayServerPublicIP")])]),e._v(" "),o("li",[e._v("Copy the hostname for your Azure deployment, under "),o("code",[e._v("DNS name")]),e._v(": "),o("img",{attrs:{src:r(377),alt:"Azure BTCPayServerPublicIP"}})]),e._v(" "),o("li",[e._v("Visit it (all major browsers supported)")]),e._v(" "),o("li",[e._v("Click 'Register' and create an account - This will be your "),o("strong",[e._v("admin")]),e._v(" account!")]),e._v(" "),o("li",[e._v("At your domain registrar, point your domain at this hostname (read more: "),o("RouterLink",{attrs:{to:"/ChangeDomain/#setting-up-your-dns-record"}},[e._v("DNS configuration")]),e._v(")")],1),e._v(" "),o("li",[e._v("Then, visit "),o("code",[e._v("https://EXAMPLE.eastus.cloudapp.azure.com/server/maintenance")])]),e._v(" "),o("li",[e._v("Enter your domain name and click 'Confirm'")]),e._v(" "),o("li",[e._v("(Wait 1-5 minutes)")]),e._v(" "),o("li",[o("strong",[e._v("Done!")]),e._v(" Visit "),o("code",[e._v("https://EXAMPLE.MYSITE.com/stores")]),e._v(" to create your store and begin invoicing.")])]),e._v(" "),o("p",[e._v("For advanced users, you can connect via SSH with the information on "),o("code",[e._v("https://EXAMPLE.MYSITE.com/server/services/ssh")]),e._v(", and:")]),e._v(" "),o("ul",[o("li",[e._v("Run "),o("code",[e._v("docker ps")]),e._v(" and "),o("code",[e._v("docker logs xxx")]),e._v(" to view running processes")]),e._v(" "),o("li",[e._v("Run "),o("code",[e._v("btcpay-down.sh")]),e._v(" and "),o("code",[e._v("btcpay-up.sh")]),e._v(" to stop and start the BTCPayServer")])]),e._v(" "),o("p",[e._v("Approximate Cost (unpruned, Bitcoin-only, after Azure $200 free trial): "),o("strong",[e._v("60 USD per month")])]),e._v(" "),o("p",[e._v("After all your nodes have synced and you've confirmed everything works, follow "),o("RouterLink",{attrs:{to:"/AzurePennyPinching/"}},[e._v("this guide")]),e._v(" to fine-tune for savings; costs should drop to "),o("strong",[e._v("30 or 40 USD per month")]),e._v(".")],1),e._v(" "),o("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/xh3Eac66qc4/hqdefault.jpg)"},attrs:{href:"http://www.youtube.com/watch?v=xh3Eac66qc4","data-id":"xh3Eac66qc4"}},[o("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/xh3Eac66qc4?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),o("p",[e._v("Learn more: "),o("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-azure",target:"_blank",rel:"noopener noreferrer"}},[e._v("btcpayserver/btcpayserver-azure"),o("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);