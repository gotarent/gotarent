import 'package:flutter/material.dart';
import 'package:gotarent/getstarted.dart';
import 'dart:async';

//import 'package:gotarent/signup.dart';

class Mysplash extends StatefulWidget {
  const Mysplash({super.key});

  @override
  State<Mysplash> createState() => _MysplashState();
}

class _MysplashState extends State<Mysplash> {
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
    return const Scaffold(
   
    );
  }
}
