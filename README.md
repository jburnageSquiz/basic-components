# Boostrap 5 component

## Details

## Deploy

To deploy a component to the Squiz DXP you will require :
- a DXP console login 
- dxp-next installed

### install dxp cli tools
```
npm i -g @squiz/dxp-cli-next
```

### run locally
```
dxp-next cmp dev ./
```

### login to the DXP

```
dxp-next auth login --tenant=___TENENT_ID_HERE___
```

### deploy a component or update

before you deploy:
- Check your folder does not include large or unnessacary files.
- increment the version of the compoent in manifest.json

```
dxp-next cmp deploy ./
```

you can view your preview in the DXP console under component service tab
