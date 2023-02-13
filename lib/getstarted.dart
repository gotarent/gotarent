// ignore_for_file: camel_case_types, duplicate_ignore

import 'package:flutter/material.dart';
import 'package:gotarent/signup.dart';
import 'loginpage.dart';
import 'package:google_fonts/google_fonts.dart';

// ignore: camel_case_types
class getstarted extends StatefulWidget {
  const getstarted({super.key});

  @override
  State<getstarted> createState() => _getstartedState();
}

class _getstartedState extends State<getstarted> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Expanded(
            flex: 5,
            child: Center(
              child: Image.asset('assets/images/mobileserv.png'),
            ),
          ),
          Expanded(
              flex: 6,
              child: Column(
                children: [
                  Expanded(
                      flex: 1,
                      child: Column(
                        children: <Widget>[
                          Align(
                            alignment: Alignment.center,
                            child: Text(
                              "Get started",
                              style: GoogleFonts.poppins(
                                textStyle: const TextStyle(
                                    fontWeight: FontWeight.bold,
                                    fontSize: 35,
                                    color: Color.fromARGB(255, 0, 0, 0),
                                    letterSpacing: 2),
                              ),
                            ),
                          ),
                          const Text(
                            "Continue with login or signup",
                            style: TextStyle(
                                //  fontSize: 10,
                                // fontWeight: FontWeight.bold
                                ),
                          )
                        ],
                      )),
                  Expanded(
                      flex: 4,
                      child: Column(
                        children: [
                          const SizedBox(
                            height: 15,
                          ),
                          ElevatedButton(
                            style: TextButton.styleFrom(
                                padding: const EdgeInsets.symmetric(
                                    horizontal: 120, vertical: 18),
                                shape: const StadiumBorder(),
                                backgroundColor:
                                    const Color.fromARGB(255, 92, 225, 230)),
                            onPressed: () {
                              Navigator.push(
                                  context,
                                  MaterialPageRoute<void>(
                                    builder: (BuildContext context) =>
                                        const loginpage(),
                                  ));
                            },
                            child: Text(
                              "Login",
                              style: GoogleFonts.poppins(
                                textStyle: const TextStyle(
                                    // fontWeight: FontWeight,
                                    fontSize: 18,
                                    color: Color.fromARGB(255, 255, 255, 255),
                                    letterSpacing: 2),
                              ),
                            ),
                          ),
                          const SizedBox(
                            height: 15,
                          ),
                          const Text(
                            'or',
                            style: TextStyle(fontSize: 23),
                          ),
                          const SizedBox(
                            height: 15,
                          ),
                          ElevatedButton(
                            style: TextButton.styleFrom(
                                padding: const EdgeInsets.symmetric(
                                    horizontal: 115, vertical: 18),
                                shape: const StadiumBorder(),
                                backgroundColor:
                                    const Color.fromARGB(255, 92, 225, 230)),
                            onPressed: () {
                              Navigator.push(
                                  context,
                                  MaterialPageRoute<void>(
                                    builder: (BuildContext context) =>
                                        const SignUp(),
                                  ));
                            },
                            child: Text(
                              "SignUp",
                              style: GoogleFonts.poppins(
                                textStyle: const TextStyle(
                                    // fontWeight: FontWeight,
                                    fontSize: 18,
                                    color: Color.fromARGB(255, 255, 255, 255),
                                    letterSpacing: 2),
                              ),
                            ),
                          ),
                          const SizedBox(
                            height: 5,
                          ),
                          TextButton(
                              onPressed: () {},
                              child: const Text(
                                "Continue as guest",
                                style: TextStyle(
                                    color: Colors.black,
                                    fontSize: 15,
                                    decoration: TextDecoration.underline,
                                    letterSpacing: 2),
                              )),
                          const SizedBox(
                            height: 5,
                          ),
                          TextButton(
                              onPressed: () {
                                showDialog(
                                  context: context,
                                  builder: (ctx) => AlertDialog(
                                    title: const Text("Privacy and policies"),
                                    content: SingleChildScrollView(
                                      child: Column(
                                        // ignore: prefer_const_literals_to_create_immutables
                                        children: const <Widget>[
                                          Text(
                                            "GotArent privacy and policies",
                                            style: TextStyle(
                                                fontWeight: FontWeight.bold),
                                          ),
                                          Text(
                                              "Last updated: February 10, 2023"),
                                          SizedBox(
                                            height: 4,
                                          ),
                                          Text(
                                              "Got a rent is a rental room accommodation system that is committed to protecting the privacy of its users. This Privacy Policy describes the information we collect, how we use it, and your rights to control that information."),
                                          Text("Information We Collect"),
                                          Text(
                                              "Personal Information: This includes your name, email address, postal address, phone number, and payment information. This information is used to create your account, process payments, and contact you in case of any updates or changes.User Content: This includes information you provide us, such as the description of the property you wish to rent, photos, and other details. This information is used to display your rental property to potential renters.Location Information: This includes your device's location information, which is used to improve the user experience by showing you properties in your area.Activity Information: This includes information about your interactions with our service, such as the properties you view, the date and time of your visits, and any reviews or ratings you leave.Use of InformationTo provide, maintain, and improve our services, including processing your transactions, responding to your requests, and displaying your rental property to potential renters.To communicate with you about your account and transactions, including sending you reminders and updates about your property listing.To personalize your experience and show you relevant content and advertisements, including properties in your area.To enforce our policies, comply with legal obligations, and protect the rights and safety of got a rent, its users, and others.Sharing of Information We will not sell or rent your personal information to third parties for their marketing purposes without your explicit consent.Service Providers: We may share your information with service providers who perform services on our behalf, such as payment processors and hosting providers.Business Transfers: In the event of a merger, acquisition, reorganization, bankruptcy, or other similar event, your information may be transferred to a third party as part of the transaction.Legal Requirements: We may disclose your information to third parties if we believe in good faith that we are required to do so by law, such as in response to a subpoena or court order.Security of InformationWe take reasonable measures to protect the security of your information, such as using secure servers and encryption. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee the absolute security of your information.your RightsAccess and Control: You may access, update, or delete your account information at any time. You may also control the visibility of your personal information by adjusting your privacy settings.Opt-Out: You may opt out of receiving marketing communications from us by following the unsubscribe instructions in the communications.Complaints: If you have a complaint about our privacy practices, you may contact us and we will investigate and resolve the issue. Changes to this Privacy Policy We may update this Privacy Policy from time to time to reflect changes in our practices or in response to changes in law. We will post any changes on this page and indicate the date of the latest revision. Contact Us If you have any questions or concerns about our privacy practices, please contact us at contact@gotarent.in"),
                                        ],
                                      ),
                                    ),
                                    actions: <Widget>[
                                      // FlatButton is deprecated and should not be used
                                      // Instead use TextButton

                                      TextButton(
                                        onPressed: () {
                                          Navigator.of(ctx).pop();
                                        },
                                        child: const Text("okay"),
                                      ),
                                    ],
                                  ),
                                );
                              },
                              child: const Text(
                                "Privacy & policies",
                                style: TextStyle(
                                    //     color: Colors.black,
                                    fontSize: 15,
                                    decoration: TextDecoration.underline,
                                    letterSpacing: 1),
                              )),
                        ],
                      )),
                ],
              ))
        ],
      ),
    );
  }
}
