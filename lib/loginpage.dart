// ignore_for_file: camel_case_types

import 'package:flutter/material.dart';

import 'package:gotarent/signup.dart';

class loginpage extends StatefulWidget {
  const loginpage({super.key});

  @override
  State<loginpage> createState() => _loginpageState();
}

bool hide = true;

class _loginpageState extends State<loginpage> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        // backgroundColor: Colors.amber,
        backgroundColor: Colors.white,
        resizeToAvoidBottomInset: false,
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              flex: 3,
              child: Image.asset(
                'assets/images/login1.png',
              ),
            ),

            //color: Color.fromARGB(255, 177, 157, 77),

            Expanded(
              flex: 6,
              child: Column(
                children: [
                  Expanded(
                    flex: 1,
                    child: Column(
                      children: const [
                        Text(
                          "Welcome Back",
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 17),
                        ),
                        SizedBox(
                          height: 3,
                        ),
                        Text('"Lets find your home away from home!"')
                      ],
                    ),
                  ),
                  Expanded(
                    flex: 7,
                    child: Form(
                        child: Column(
                      children: [
                        Expanded(
                          flex: 1,
                          child: Padding(
                            padding: const EdgeInsets.only(
                                left: 10.0, right: 10.0, bottom: 0),
                            child: Align(
                              alignment: Alignment.center,
                              child: TextFormField(
                                decoration: const InputDecoration(
                                  prefixIcon: Icon(
                                    Icons.email,
                                    color: Colors.black,
                                  ),
                                  hintText: "Enter e-mail",
                                  labelText: "Email",
                                  enabledBorder: OutlineInputBorder(
                                    borderSide: BorderSide(
                                      width: 1.5,
                                      color: Color.fromARGB(255, 45, 130, 195),
                                    ),
                                    borderRadius:
                                        BorderRadius.all(Radius.circular(15)),
                                  ),
                                  focusedBorder: OutlineInputBorder(
                                    borderSide: BorderSide(
                                      width: 1.5,
                                      color: Color.fromARGB(255, 92, 225, 230),
                                    ),
                                    borderRadius:
                                        BorderRadius.all(Radius.circular(15)),
                                  ),
                                  //  icon: Icon(Icons.),
                                ),
                              ),
                            ),
                          ),
                        ),
                        Expanded(
                          flex: 1,
                          child: Padding(
                            padding: const EdgeInsets.only(
                                left: 10.0, right: 10.0, bottom: 0),
                            child: Align(
                              alignment: Alignment.center,
                              child: TextFormField(
                                obscureText: hide,
                                decoration: InputDecoration(
                                  prefixIcon: const Icon(
                                    Icons.lock,
                                    color: Colors.black,
                                  ),
                                  suffixIcon: IconButton(
                                      onPressed: () {
                                        setState(() {
                                          if (hide) {
                                            hide = false;
                                          } else {
                                            hide = true;
                                          }
                                        });
                                      },
                                      icon: hide
                                          ? const Icon(Icons.visibility_off)
                                          : const Icon(Icons.visibility)),
                                  hintText: "Enter Password",
                                  labelText: "Password",
                                  enabledBorder: const OutlineInputBorder(
                                    borderSide: BorderSide(
                                      width: 1.5,
                                      color: Color.fromARGB(255, 45, 130, 195),
                                    ),
                                    borderRadius:
                                        BorderRadius.all(Radius.circular(15)),
                                  ),
                                  focusedBorder: const OutlineInputBorder(
                                    borderSide: BorderSide(
                                      width: 1.5,
                                      color: Color.fromARGB(255, 92, 225, 230),
                                    ),
                                    borderRadius:
                                        BorderRadius.all(Radius.circular(15)),
                                  ),
                                  //       icon: Icon(Icons.lock),
                                ),
                                validator: (String? value) {
                                  if (value!.isEmpty) {
                                    return "Password Cannot be Empty";
                                  } else if (value.length < 6) {
                                    return "Password must contain atleast 6 letters";
                                  }
                                  return null;
                                },
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(
                          height: 4,
                        ),
                        Expanded(
                          flex: 3,
                          child: Column(
                            children: [
                              Expanded(
                                flex: 2,
                                child: ElevatedButton(
                                  style: TextButton.styleFrom(
                                    backgroundColor:
                                        const Color.fromARGB(255, 92, 225, 230),
                                    padding: const EdgeInsets.symmetric(
                                      vertical: 4,
                                      horizontal: 151,
                                    ),
                                  ),
                                  onPressed: () {
                                    // const OtpPage();
                                  },
                                  //Row(children: [const Text('SignUp')],)
                                  child: const Text('Login',
                                      style: TextStyle(fontSize: 16)

                                      // ),
                                      ),
                                ),
                              ),
                              Expanded(
                                flex: 7,
                                child: Column(
                                  children: [
                                    const SizedBox(
                                      height: 20,
                                    ),
                                    const Expanded(
                                      flex: 1,
                                      child: Text("Don't have an Account?"),
                                    ),
                                    Expanded(
                                      flex: 2,
                                      child: TextButton(
                                          onPressed: () {
                                            Navigator.pushReplacement(
                                                context,
                                                MaterialPageRoute<void>(
                                                  builder:
                                                      (BuildContext context) =>
                                                          const SignUp(),
                                                ));
                                          },
                                          child: const Text("Signup here")),
                                    ),
                                    Expanded(
                                      flex: 8,
                                      child: Container(),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        )
                      ],
                    )),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
