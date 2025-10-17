# The TCP IP model

The TCP IP model has 4 layers

## Application

Interacts with the human and decides what messages need to get sent. Includes protocols:

- SSH
- WWW
- Email

## Transport

Breaks a message up into packets, gives said packets a packet number, headerand attaches source and destination adress to packets. 
Internet Protocls:

-TCP

Internet protocol that tries to ensure that message received is exact same as message sent via requesting packets that it notices are missing. Is slower than UDP but also more relaible.

-UDP

Intenet protocol that just sends packets and doesn't request missing packetsIt is faster and less reliable than TCP.

## Internet

Deals with logic about packet routing. The IP protocol exists here.

## Link

Physical system used to transmit data.
