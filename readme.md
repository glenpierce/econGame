Setup:<br>
You'll need a postgres DB, to set one up in Docker:<br>
`docker run --name postgres -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_USER=user -d -p 5
432:5432 postgres`<br>
To create the DB and associated tables run:<br>
`mvn liquibase:update`<br>
To set up the frontend, you'll need to be in the /frontend directory and run:<br>
`npm start`<br>
To start the server run:<br>
`mvn spring-boot:run`<br>
Then navigate the browser to:<br>
http://localhost:3000/api/hello


Setting up a nice VM:

Enabling an Ethernet connection on Centos7<br>
(source: https://adam.younglogic.com/2017/08/enable-ethernet-centos7/)<br>
I recently created a new Centos VM. When it booted, I noticed it did not have a working ethernet connection. So, I started playing with things, and got it working. Here are my notes:<br>
To view connections<br>
`nmcli c`<br>
To bring up the connection was simple:<br>
`nmcli c up eth0`<br>
To make it persist across boots required the autoconnect value:<br>
`nmcli c mod eth0 connection.autoconnect yes`<br>
This last one reflects the ONBOOT value in the file `/etc/sysconfig/network-scripts/ifcfg-eth0`<br>
Setting it changed ONBOOT from no to yes.<br>
Rebooting the machine and ip addr shows the connection up.

Setup port forwarding:<br>
Get the VMs ipaddress, then go to VirtualBox's port forwarding and set the host ip to 127.0.0.1 and the ports to what you want them to be there.<br>
Then set the VM's ipaddress as the guest ipaddress and the ports that the VM uses as the ports you're forwarding.

updating the DB:
`mvn liquibase:update`