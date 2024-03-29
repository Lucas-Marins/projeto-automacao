# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

variable "prefix" {
  description = "The prefix used for all resources in this example"
  default =  "Deploy-Container-Register"
}

variable "location" {
  description = "The Azure location where all resources in this example should be created"
  default = "West Europe"
}
