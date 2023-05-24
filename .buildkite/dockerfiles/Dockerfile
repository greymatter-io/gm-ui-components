FROM --platform=linux/amd64 greymatter.jfrog.io/base-oci/universal:latest

LABEL name="gm-ui-components-ci" \
    maintainers="prod-ops@greymatter.io" \
    base="ubuntu-greymatter-base"

# Add Node 18 repository
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash

RUN apt update -y

RUN apt install -y gcc g++ make nodejs 



