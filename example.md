# Example

## Getting Super Powers

Becoming a super hero is a fairly straight forward process:

```dart
class DocumentsView extends StatefulWidget {
  DocumentsView(this.documents, {
    this.showHeader = true,
    this.isList = false
  });

  final List<Document> documents;
  final bool isList;
  final bool showHeader;

  @override
  _DocumentsViewState createState() => _DocumentsViewState();
}
```

{% hint style="info" %}
 Super-powers are granted randomly so please submit an issue if you're not happy with yours.
{% endhint %}

Once you're strong enough, save the world:

```
// Ain't no code for that yet, sorry
echo 'You got to trust me on this, I saved the world'
```



