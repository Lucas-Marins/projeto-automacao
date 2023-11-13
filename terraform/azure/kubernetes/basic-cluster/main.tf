# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

provider "azurerm" {
  features {}

  client_id       = "9d19ec9d-d886-4ae8-84d5-36c77c5d31fe"
  client_secret   = "Xgc8Q~MkeAyuqr.NBilOIDTI2yFCHUGl~zDxwbfs"
  tenant_id       = "dca455ca-117d-46e4-b8a3-0b9e3b1d9c5f"
  subscription_id = "d7e3ca1d-843b-46c2-8858-13b06ec2d07a"
}

resource "azurerm_resource_group" "example" {
  name     = "${var.prefix}-k8s-resources"
  location = var.location
}


resource "azurerm_kubernetes_cluster" "example" {
  name                = "${var.prefix}-k8s"
  location            = azurerm_resource_group.example.location
  resource_group_name = azurerm_resource_group.example.name
  dns_prefix          = "${var.prefix}-k8s"

  default_node_pool {
    name       = "default"
    node_count = 1
    vm_size    = "Standard_DS2_v2"
  }

  identity {
    type = "SystemAssigned"
  }
}
