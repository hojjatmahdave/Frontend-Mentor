import React from "react";
import { CollapsesStyles } from "../../../styles/main/fourth-section/collapses-styles";
import { Collapse } from "antd";
const { Panel } = Collapse;
export const Collapses = () => {
  return (
    <CollapsesStyles>
      <Collapse defaultActiveKey={["1"]} ghost>
        <Panel header="What is Ding?" key="1">
          <p>
            Ding is the world's leading international mobile top-up platform.
          </p>
          <p>
            With Ding, you can buy mobile top-ups for your own phone or send a
            prepaid recharge online to someone else. You can send a top-up
            online whether it's in app or online, and you can do it at any time
            or on any device that suits you.
          </p>
        </Panel>
        <Panel header="What is an international top-up?" key="2">
          <p>
            An international mobile top-up or mobile recharge is the process of
            adding balance to a prepaid phone that has run out of credit. When
            the balance reaches the phone, it will be available to make calls,
            send messages or surf the internet.
          </p>
          <p>
            Mobile top-ups have different meanings in different countries. You
            may know it as mobile top-up, airtime recharge, mobile load,
            balance, refill, minutes, or credit. 
          </p>
          <p>
            No matter what you call it, with Ding you can send international
            recharge online, and it will be received in under 3 seconds.
          </p>
        </Panel>
        <Panel header="Can I send recharges from abroad?" key="3">
          <p>
            Yes, Ding is an international top-up service so you can send mobile
            top-up from the USA, Mexico, Canada, Jamaica, or any other country
            in the world.
          </p>
        </Panel>
        <Panel header="How to send a top-up online" key="4">
          <p>
            With Ding, you can buy airtime online for any mobile network. It can
            be done in three quick steps, at any time or on any device that
            suits you.
          </p>
          <ol>
            <li>
              <h2>
                Select the country and enter the prepaid number to recharge{" "}
                <span> (the country code will be already preselected)</span>
              </h2>
            </li>
            <li>
              <h2>Select an amount of credit or plan to send</h2>
            </li>
            <li>
              <h2>
                Choose your payment method.
                <span>
                  {" "}
                  Once purchased,the mobile recharge is received in 3 seconds!
                </span>
              </h2>
            </li>
          </ol>
        </Panel>
        <Panel header="Can I also send data?" key="5">
          <p>
            Yes, you can recharge data to any mobile number with Ding. Depending
            on the mobile network of the person receiving the internet, there
            are two options.
          </p>
          <ul>
            <li>
              <p>
                You can send them a bundle (plan) that includes an MB or GB
                allowance.
              </p>
            </li>
            <li>
              <p>
                If there are no data plans available, you can send them a
                regular mobile recharge and once it's received they can use the
                credit to purchase data.
              </p>
            </li>
          </ul>
        </Panel>
        <Panel
          header="What are the most popular countries that our users recharge?"
          key="6"
        >
          <p>
            We recharge mobile numbers globally, across 150+ countries. Popular
            countries include:
          </p>
          <ul>
            <li>
              <a href="#">Recharge Mexico</a>
            </li>
            <li>
              <a href="#">Recharge India</a>
            </li>{" "}
            <li>
              <a href="#">Recharge Afghanistan</a>
            </li>{" "}
            <li>
              <a href="#">Reload Philippines</a>
            </li>{" "}
            <li>
              <a href="#">Recharge Sudan</a>
            </li>
          </ul>
        </Panel>
        <Panel header="What are the most popular operators?" key="7">
          <p>
            Currently you can send top-up to over 600 operator networks
            globally. Popular choices include:
          </p>
          <ul>
            <li>
              <a href="#">Recharge Airtel India</a>
            </li>
            <li>
              <a href="#">Recharge Digicel</a>
            </li>{" "}
            <li>
              <a href="#">Recharge Claro Dominican Republic</a>
            </li>{" "}
            <li>
              <a href="#">Zain Sudan</a>
            </li>
          </ul>
        </Panel>
        <Panel header="Can I pay for a recharge with my credit card?" key="8">
          <p>
            Yes, we support all major payment methods when you buy airtime
            online, including credit cards, debit cards, Google Pay, Apple Pay,
            and PayPal.
          </p>
        </Panel>
        <Panel header="How can I get exclusive Ding promotions?" key="9">
          <p>
            Operator promotional offers and codes are sent by our marketing
            team. These can be sent via email, SMS, or displayed on our website
            and app.
          </p>
          <p>
            You must manually opt-in to be able to receive notifications from us
            to get promotional codes. To change which notifications you receive
            from us follow these steps:
          </p>
          <ol>
            <li>
              <p>Log into your Ding Account</p>
            </li>
            <li>
              <p>Select "My Account"</p>
            </li>
            <li>
              <p>Click "Settings"</p>
            </li>
            <li>
              <p>Scroll down to Contact preferences</p>
            </li>
            <li>
              <p>
                Click to choose which types of notifications you wish to
                receive.
              </p>
            </li>
          </ol>
        </Panel>
        <Panel header="Can I also buy gift cards online with Ding?" key="10">
          <p>
            Yes, you can. With Ding, you can make your loved ones smile by
            sending them a gift card. It's very easy to get one, just select the
            card and amount you want, enter your payment method, and done. The
            code will arrive instantly.
          </p>
          <p>The most popular cards by our users are:</p>
          <ul>
            <li>
              <a href="#">Amazon gift cards</a>
            </li>
            <li>
              <a href="#">Neosurf vouchers</a>
            </li>
            <li>
              <a href="#">Mobile Legends Gift Cards</a>
            </li>
          </ul>
        </Panel>
      </Collapse>
    </CollapsesStyles>
  );
};
