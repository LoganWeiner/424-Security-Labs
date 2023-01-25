#!/usr/bin/python3
from scapy.all import *
import sys

argumentList = sys.argv

if len(argumentList) != 2:
	print("Usage: sudo ./task1.3.py [hostname]")
	exit()

# Initalize variables
MAX_TTL = 255
dstHostname = argumentList[1];
dstIP = socket.gethostbyname(argumentList[1]);

print("task1.3.py to " + dstHostname + " (" + dstIP + "), 255 hops max");


# Create Packet 
ip = IP()
ip.dst = dstIP
ip.ttl = 1

icmp = ICMP()

while ip.ttl <= MAX_TTL:
	# Send Packet
	reply = sr1(ip/icmp, verbose=0, timeout=2)

	# If no reply is returned, skip to next TTL increment
	if (reply == None):
		print(str(ip.ttl) + "\t* * *")
		ip.ttl += 1
		continue

	print(str(ip.ttl) + "\t" + reply.src)

	# Check reply
	if (reply.src == dstIP):
		break

	# If not successful, increment TTL
	ip.ttl += 1

