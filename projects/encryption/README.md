# Encryption Activity Reflection


## Part 1: Key Exchange

My Key:4

My Partner's Key :4 

Our initial shared key:8

## Part 2: Messaging

Complete this table with each of your messages. This should 

include the entire conversation - the messages that you sent

and the messages that you received.

| Encoded Message | Decoded Message | Key |
|pmttw|Hello | 8 |
|            Ymfspx ktw itnsl ymj yjxy ytifd!   |       Thanks for doing the test today!          | 5  |
|         Pdwjgo bkn happejc ia pwga ep!|Thanks for letting me take it!| 22 |
|   Tjp jigt bjo jiz rmjib ji hpgodkgz xcjdxz     |You only got one wrong on multiple choice        |21 |
|       Sowkgew !         |           Awesome!      | 18    |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the 

message leaves the application layer, it is encoded in binary. We've been working with text for 

this activity for convenience, but let's see what the binary looks like.

Go back to the first encrypted message that you sent (it should be in 

`rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the 

real message is in binary.

Select the first six characters from this message and copy them here:

TJzbMk

Using the ASCII table, convert these five characters to binary (if necessary,

include leading zeroes so that each character is 8 bits): 

01010100 01001010 01111010 01100010 01001101 01101011

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary 

values you computed above.

    =========
  
  Packet 1:

    Source: Cole Harmaty

    Destination: Christopher Jones 

    Sequence: 1/3

    Data: 01010100 01001010

    =========

    Packet 2:

    Source: Cole Harmaty

    Destination: Christopher Jones

    Sequence: 2/3 

    Data: 01111010 01100010

    =========
 
   Packet 3:

    Source: Cole Harmaty

    Destination: Christopher Jones

    Sequence: 3/3

    Data: 01001101 01101011

    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each 

serve in this simulation?

The difference between symmetric and asymmetric encryption is that when using asymmetric 

encryption, each person has a different key or set of keys, and when using symmetric 

encryption, each person uses the same key or set of keys. Another difference is that 

asymmetric encryption is often much more secure and much slower than symmetric encryption. 

The purpose that asymmetric encryption served in this simulation was to securely exchange the 

keys used for the symmetric encryption, while the purpose that symmetric encryption served 

was to securely transfer the actual contents of the message.

- Why is it important that this protocol uses a new key for each message?

It is important that this protocol uses a new key for each message because that means that if 

one message is compromised, the rest aren’t.

- Why is it important that you never share your secret key?

It is important that you never share your secret key because anyone with that key can decrypt 

messages sent to you.

- In the transport layer, do these messages use TCP or UDP? Why?

In the transport layer these messages use TCP because it lets messages be resent if they are 

missing, corrupted, or some such.

- Now that you've created packets in the transport layer, give a short explanation of what 

happens to these packets in the internet layer and in the link layer.

In the link layer, the packets are physically sent and in the internet layer they are moved 

throughout routers until they get to their destination.

- This protocol successfully encrypts the **content** of the message. Even though and 

adversary in the middle can't read the content of the message, what other

information can they still see?

The adversary can still see the message’s metadata such as the time that the message was 

sent, usernames, and often where the message was sent from.

