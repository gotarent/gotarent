import 'package:flutter/material.dart';
import 'package:gotarent/loginpage.dart';

class SignUp extends StatelessWidget {
  const SignUp({super.key});

  @override
  Widget build(BuildContext context) {
    return const S_page();
  }
}

// ignore: camel_case_types
class S_page extends StatefulWidget {
  const S_page({super.key});

  @override
  State<S_page> createState() => _S_pageState();
}

// ignore: camel_case_types
class _S_pageState extends State<S_page> {
  bool hide = true;
  bool value = false;
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Material(
        color: Colors.white,
        child: SingleChildScrollView(
          child: Column(
            children: [
              Row(
                children: [
                  Image.asset(
                    "assets/images/signupimg (2).png",
                    //alignment: Alignment.topRight,

                    fit: BoxFit.cover,
                  ),
                ],
              ),
              Form(
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
                  child: Column(
                    children: [
                      TextFormField(
                        //obscureText: true,
                        decoration: const InputDecoration(
                          prefixIcon: Icon(
                            Icons.person,
                            color: Colors.black,
                          ),
                          hintText: "Enter Username",
                          labelText: "Name",
                          enabledBorder: OutlineInputBorder(
                            borderSide: BorderSide(
                              width: 1.5,
                              color: Color.fromARGB(255, 45, 130, 195),
                            ),
                            borderRadius: BorderRadius.all(Radius.circular(15)),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderSide: BorderSide(
                              width: 1.5,
                              color: Color.fromARGB(255, 92, 225, 230),
                            ),
                            borderRadius: BorderRadius.all(Radius.circular(15)),
                          ),
                          //  icon: Icon(Icons.),
                        ),
                        validator: (String? value) {
                          if (value!.isEmpty) {
                            return "Username Cannot be Empty";
                          }
                          null;
                          return null;
                        },
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      TextFormField(
                        //ss obscureText: true,
                        decoration: const InputDecoration(
                          prefixIcon: Icon(
                            Icons.phone,
                            color: Colors.black,
                          ),

                          hintText: " Eg +91 9733814168",
                          labelText: "Phone No",

                          enabledBorder: OutlineInputBorder(
                            borderSide: BorderSide(
                              width: 1.5,
                              color: Color.fromARGB(255, 45, 130, 195),
                            ),
                            borderRadius: BorderRadius.all(Radius.circular(15)),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderSide: BorderSide(
                              width: 1.5,
                              color: Color.fromARGB(255, 92, 225, 230),
                            ),
                            borderRadius: BorderRadius.all(Radius.circular(15)),
                          ),
                          //
                          // icon: Icon(Icons.phone),
                        ),
                        keyboardType: TextInputType.number,
                        validator: (String? value) {
                          if (value!.isEmpty) {
                            return "Number Cannot be Empty";
                          }
                          null;
                          return null;
                        },
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      TextFormField(
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
                            borderRadius: BorderRadius.all(Radius.circular(15)),
                          ),
                          focusedBorder: const OutlineInputBorder(
                            borderSide: BorderSide(
                              width: 1.5,
                              color: Color.fromARGB(255, 92, 225, 230),
                            ),
                            borderRadius: BorderRadius.all(Radius.circular(15)),
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
                      const SizedBox(
                        height: 10.0,
                      ),

                      Row(
                        children: [
                          Checkbox(
                              value: value,
                              onChanged: (bool? value) {
                                setState(() {
                                  if (this.value == false) {
                                    this.value = true;
                                  } else {
                                    this.value = false;
                                  }
                                });
                              }),
                          const SizedBox(
                            width: 5,
                          ),
                          const Text("By this you accept all"),
                          TextButton(
                              onPressed: () {},
                              child: const Text("terms & condition"))
                        ],
                      ),

                      const SizedBox(
                        height: 10.0,
                      ),

                      ElevatedButton(
                        style: TextButton.styleFrom(
                          backgroundColor:
                              const Color.fromARGB(255, 92, 225, 230),
                          padding: const EdgeInsets.symmetric(
                            vertical: 18,
                            horizontal: 140,
                          ),
                        ),
                        onPressed: () {
                          // const OtpPage();
                        },
                        //Row(children: [const Text('SignUp')],)
                        child:
                            const Text('Signup', style: TextStyle(fontSize: 12)

                                // ),
                                ),
                      ),
                      // Material(
                      //   color: Color.fromARGB(255, 92, 225, 230),
                      //   child: InkWell(
                      //     splashColor: Colors.red,
                      //     child: Ink(
                      //       height: 60,
                      //     ),
                      //   ),

                      // ),
                      const SizedBox(
                        height: 10,
                      ),
                      // TextButton(
                      //  Text( 'Already Registered',
                      //   style: TextStyle(
                      //     fontSize: 15,
                      //   )), onPressed: () {  },
                      //   child: null,
                      // ),

                      const Text(
                        "Already Registered? ",
                        style: TextStyle(
                          fontWeight: FontWeight.w400,
                          fontSize: 16,
                        ),
                      ),

                      TextButton(
                        onPressed: () {
                          Navigator.pushReplacement(
                              context,
                              MaterialPageRoute<void>(
                                builder: (BuildContext context) =>
                                    const loginpage(),
                              ));
                        },
                        child: const Text(
                          'Log In Here',
                          style: TextStyle(
                            color: Colors.black,
                            fontSize: 16,
                          ),
                        ),
                      ),

                      // Text('Log in here'),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
