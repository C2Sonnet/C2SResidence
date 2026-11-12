# 如月レジデンス Online / C2SResidence Online

住宅空間をブラウザーで閲覧するWebプロジェクトです。

- 公式サイト: https://resi.c2s.me/
- リポジトリ: https://github.com/C2Sonnet/C2SResidence
- 開発版: `r0.3.7`
- 状態: 建築寸法と上下階の関係を検証中。住宅3Dモデルはまだ公開していません。

## 配置

公開ルートは **`public/`** です。サーバーのドキュメントルートも `public/` に設定してください。

```text
public/        HTML / CSS / JS / 公開用データ
app/           サーバー側共通機能（未実装）
config.example/ 設定手順の雛形
data/          公開可能なプロジェクト情報
database/      DB定義・更新機能用（空の雛形）
docs/          公開開発文書
materials/     材質用（空の雛形）
media/         メディア用（空の雛形）
nginx/         サーバー設定サンプル
scripts/       検証用スクリプト
tools/         開発補助ツール用（空の雛形）
tests/         テスト
```

実際の環境設定はGit管理対象外の `config/` に保存します。運用上の機密情報、未確定の建築資料や個人素材は含まれていません。

## 実行

Node.js 20+ と Python 3 を利用できます。追加の依存パッケージは不要です。

```sh
npm test
python3 -m http.server 8000 --directory public
```

`http://localhost:8000/` で確認できます。詳細は [構造説明](docs/ARCHITECTURE.md) を参照してください。
