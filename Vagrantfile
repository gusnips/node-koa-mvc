# -*- mode: ruby -*-
# vi: set ft=ruby :

project_name = 'nodeapp'

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "precise32"
  config.vm.box_url = "http://files.vagrantup.com/precise32.box"

  config.vm.hostname = project_name+".dev"
  config.vm.network :private_network, ip: "33.33.33.96"
  config.vm.synced_folder "./", "/var/www", id: "vagrant-root", :nfs => false, owner: "vagrant", group: "vagrant"

  config.vm.provider "virtualbox" do |v|
    v.name = project_name
    v.gui = false
    v.memory = 1024
    #v.cpus = 2
    v.customize ["modifyvm", :id, "--hwvirtex", "off"]
    #v.customize ["modifyvm", :id, "--longmode", "off"]
  end

  config.vm.provision :shell, :path => "install.sh", privileged: false

  # hostmanager plugin options
  #
  config.vm.provision :hostmanager
  #
  config.hostmanager.enabled            = true
  config.hostmanager.manage_host        = true
  config.hostmanager.ignore_private_ip  = false
  config.hostmanager.include_offline    = true
end
