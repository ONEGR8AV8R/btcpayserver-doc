(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{504:function(e,t,a){e.exports=a.p+"assets/img/1.0abcf6d5.png"},505:function(e,t,a){e.exports=a.p+"assets/img/2.9bc83703.png"},506:function(e,t,a){e.exports=a.p+"assets/img/3.f7d38b57.png"},507:function(e,t,a){e.exports=a.p+"assets/img/4.e37e0402.png"},508:function(e,t,a){e.exports=a.p+"assets/img/5.29be95a6.png"},509:function(e,t,a){e.exports=a.p+"assets/img/6.a08ae0b7.png"},510:function(e,t,a){e.exports=a.p+"assets/img/7.711468a1.png"},511:function(e,t,a){e.exports=a.p+"assets/img/8.6d842192.png"},671:function(e,t,a){"use strict";a.r(t);var n=a(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"pull-payments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pull-payments"}},[e._v("#")]),e._v(" Pull payments")]),e._v(" "),n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),n("p",[e._v("Traditionally, to make a Bitcoin payment, a receiver shares their bitcoin address and the sender later sends money to this address.\nSuch system is called "),n("code",[e._v("Push payment")]),e._v(" as the sender initiates the payment while the receiver may be unavailable, in effect "),n("code",[e._v("pushing")]),e._v(" the payment to the receiver.")]),e._v(" "),n("p",[e._v("However, what about reversing the role?")]),e._v(" "),n("p",[e._v("What if, instead of a sender "),n("code",[e._v("pushing")]),e._v(" the payment, the sender allows the receiver to "),n("code",[e._v("pull")]),e._v(" the payment at a time the receiver seems fit?\nThis is the concept of "),n("code",[e._v("Pull payment")]),e._v(". This allows several new applications such as:")]),e._v(" "),n("ul",[n("li",[e._v("A subscription service (where the subscriber allows the service to pull money every x amount of time)")]),e._v(" "),n("li",[e._v("Refunds (where the merchant allows the customer to pull the refund money to his wallet when it seems fit)")]),e._v(" "),n("li",[e._v("Time-based billing for freelancers (where the person hiring allows the freelance to pull money to his wallet as time get reported)")]),e._v(" "),n("li",[e._v("Patronage (where the patron allows the recipient to pull money every month to continue supporting their work)")]),e._v(" "),n("li",[e._v("Automatic selling (where a customer of an exchange would allow an exchange to pull money from their wallet to automatically sell every month)")]),e._v(" "),n("li",[e._v("Balance withdraw system (where a high-volume service allows users to request withdrawals from their balance, the service can then easily batch all the payouts to many users, at fixed intervals)")])]),e._v(" "),n("p",[e._v("You can also follow this video:")]),e._v(" "),n("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/-e8lPd9NtPs/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=-e8lPd9NtPs","data-id":"-e8lPd9NtPs"}},[n("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/-e8lPd9NtPs?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),n("h2",{attrs:{id:"concept"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#concept"}},[e._v("#")]),e._v(" Concept")]),e._v(" "),n("p",[e._v("When a sender configures a "),n("code",[e._v("Pull payment")]),e._v(", they can configure a number of properties:")]),e._v(" "),n("ul",[n("li",[e._v("Start date")]),e._v(" "),n("li",[e._v("End date (optional)")]),e._v(" "),n("li",[e._v("A period (optional)")]),e._v(" "),n("li",[e._v("A limit amount")]),e._v(" "),n("li",[e._v("A unit (such as USD, BTC, Hours)")]),e._v(" "),n("li",[e._v("Available payment methods")])]),e._v(" "),n("p",[e._v("After this, the sender can share the pull payment using a link with the receiver, allowing the receiver to "),n("code",[e._v("create a payout")]),e._v(".\nThe receiver will choose for their payout:")]),e._v(" "),n("ul",[n("li",[e._v("Which payment method to use")]),e._v(" "),n("li",[e._v("Where to send the money")])]),e._v(" "),n("p",[e._v("Once a payout is created, it will count toward the "),n("code",[e._v("pull payment's limit")]),e._v(" for the current "),n("code",[e._v("period")]),e._v(".\nThe sender will then approve the payout by setting the "),n("code",[e._v("rate")]),e._v(" in which the payout will be sent, and proceed to payment.")]),e._v(" "),n("p",[e._v("For the sender, we provide an easy to use way to batch the payment of several payouts from the "),n("RouterLink",{attrs:{to:"/Wallet/"}},[e._v("BTCPay Internal Wallet")]),e._v(".")],1),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n +----------+           +-------------------+            +------------+\n |          |           |                   |            |            |\n |  Sender  |           |   BTCPay Server   |            |  Receiver  |\n |          |           |                   |            |            |\n +----------+           +-------------------+            +------------+\n      |                            |                            |\n      |                            |                            |\n      |          Create            |                            |\n      +---------------------------\x3e+                            |\n      |          Pull payment      |                            |\n      |                            |                            |\n      |                            |                            |\n      |          Share             |                            |\n      +--------------------------------------------------------\x3e+\n      |          Pull payment      |                            |\n      |                            |                            |\n      |                            |           Create           |\n      |                            +<---------------------------+\n      |                            |           Payout           |\n      |                            |                            |\n      |         Approve            |                            |\n      +---------------------------\x3e+                            v\n      |         Payout             |\n      |                            |\n      |         Pay                |\n      +---------------------------\x3e+\n      |         Payout             |\n      |                            |\n      |                            |\n      v                            v\n")])])]),n("p",[e._v("Note that BTCPay Server does not approve and pay a payout automatically. In future releases, we will look into payouts which are approved to be paid out automatically under the correct conditions.\nInstead, a notification will appear for the sender, giving the sender the choice to approve and pay the payouts.")]),e._v(" "),n("h2",{attrs:{id:"greenfield-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#greenfield-api"}},[e._v("#")]),e._v(" Greenfield API")]),e._v(" "),n("p",[e._v("We provide a full API to both the sender and receiver that is documented in the "),n("code",[e._v("/docs")]),e._v(" page of your instance. (or on our "),n("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("public link"),n("OutboundLink")],1),e._v(" page)")]),e._v(" "),n("p",[e._v("Since our API exposes the full capability of pull payments, a sender can automate payments for his own need.")]),e._v(" "),n("h2",{attrs:{id:"user-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#user-interface"}},[e._v("#")]),e._v(" User interface")]),e._v(" "),n("p",[e._v("The user interface only allows a subset of what is possible.")]),e._v(" "),n("h3",{attrs:{id:"create-a-pull-payment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-a-pull-payment"}},[e._v("#")]),e._v(" Create a pull payment")]),e._v(" "),n("ol",[n("li",[e._v("Go to your wallet page / pull payments\n"),n("img",{attrs:{src:a(504),alt:"1"}})]),e._v(" "),n("li",[e._v("Click on "),n("code",[e._v("Create a new pull payment")]),e._v(" "),n("img",{attrs:{src:a(505),alt:"2"}})]),e._v(" "),n("li",[e._v("Fill out the pull payment information, click "),n("code",[e._v("Create")]),e._v(" "),n("img",{attrs:{src:a(506),alt:"3"}})]),e._v(" "),n("li",[e._v("Go to the pull payment page by clicking on "),n("code",[e._v("View")])]),e._v(" "),n("li",[e._v("Share this page with the payment receiver\n"),n("img",{attrs:{src:a(507),alt:"4"}})]),e._v(" "),n("li",[e._v("As the receiver, fill out how much "),n("code",[e._v("USD")]),e._v(" you claim, and to which address should the money be sent.\n"),n("img",{attrs:{src:a(508),alt:"5"}})])]),e._v(" "),n("h3",{attrs:{id:"approve-and-pay-a-payout"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#approve-and-pay-a-payout"}},[e._v("#")]),e._v(" Approve and pay a payout")]),e._v(" "),n("ol",[n("li",[e._v("The sender get notified when the receiver is pulling money\n"),n("img",{attrs:{src:a(509),alt:"6"}})]),e._v(" "),n("li",[e._v("Clicking on the notification brings the sender to a page listing all outstanding payouts\n"),n("img",{attrs:{src:a(510),alt:"7"}})]),e._v(" "),n("li",[e._v("Check the payout to approve and pay and confirm\n"),n("img",{attrs:{src:a(511),alt:"8"}})]),e._v(" "),n("li",[e._v("You are then brought to the normal wallet user interface of BTCPay Server")])]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("Clicking on Confirm selected payouts will use the current exchange rate of your wallet's store settings. The rate is then fixed, even if you don't complete the payment. Payments made at a later time will use this previously confirmed rate.")])]),e._v(" "),n("h2",{attrs:{id:"additional-use-cases-for-the-pull-payments-feature"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#additional-use-cases-for-the-pull-payments-feature"}},[e._v("#")]),e._v(" Additional use cases for the Pull Payments feature")]),e._v(" "),n("p",[e._v("The Pull Payment feature can be used in multiple applications, the first one being "),n("RouterLink",{attrs:{to:"/Refund/"}},[e._v("Refunds")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);