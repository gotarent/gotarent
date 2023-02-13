import 'package:flutter/material.dart';
import 'dart:async';
import 'getstarted.dart';


// import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});


  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: MySplash(),
    );
  }
}
class MySplash extends StatefulWidget {
  const MySplash({super.key});
  

  @override
  State<MySplash> createState() => _mysplashState();
}

// ignore: camel_case_types
class _mysplashState extends State<MySplash> {
   @override
     void initState()  {
    super.initState();
    Timer(const Duration(milliseconds: 2200), () {
      Navigator.pushReplacement<void, void>(
          context,
          MaterialPageRoute<void>(
            builder: (BuildContext context) => const getstarted(),
          ));
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
             backgroundColor: Colors.white,
      body: Center(
        child: Image.asset('assets/images/annigif.gif'),
      ),


    );
  }
}
